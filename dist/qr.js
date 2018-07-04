Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("@tangle-frost/iota-core/dist/helpers/numberHelper");
const qrAlphaNumeric_1 = require("./data/qrAlphaNumeric");
const qrByte8_1 = require("./data/qrByte8");
const qrNumber_1 = require("./data/qrNumber");
const bitBuffer_1 = require("./helpers/bitBuffer");
const mathHelper_1 = require("./helpers/mathHelper");
const polynomial_1 = require("./helpers/polynomial");
const qrHelper_1 = require("./helpers/qrHelper");
const rsBlock_1 = require("./helpers/rsBlock");
const errorCorrectLevel_1 = require("./models/errorCorrectLevel");
/**
 * Class to generates QR codes from data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
class QR {
    /**
     * Create a new instance of QR.
     * @param typeNumber 0 to 40, 0 means autodetect
     * @param errorCorrectLevel 'L','M','Q','H'
     */
    constructor(typeNumber = 6, errorCorrectLevel = errorCorrectLevel_1.ErrorCorrectLevel.L) {
        if (!numberHelper_1.NumberHelper.isInteger(typeNumber) || typeNumber < 0 || typeNumber > 40) {
            throw Error("The typeNumber parameter should be a number >= 0 and <= 40");
        }
        this._typeNumber = typeNumber;
        this._errorCorrectLevel = errorCorrectLevel;
        this._qrData = [];
        this._moduleCount = 0;
        this._modules = [];
        mathHelper_1.MathHelper.initialize();
    }
    /**
     * Add text data to the QR Code.
     * @param qrData The data to add.
     */
    addText(qrData) {
        this._qrData.push(new qrByte8_1.QRByte8(qrData));
    }
    /**
     * Add number to the QR Code.
     * @param qrData The data to add.
     */
    addNumber(qrData) {
        this._qrData.push(new qrNumber_1.QRNumber(qrData));
    }
    /**
     * Add alpha numeric to the QR Code.
     * @param qrData The data to add.
     */
    addAlphaNumeric(qrData) {
        this._qrData.push(new qrAlphaNumeric_1.QRAlphaNumeric(qrData));
    }
    /**
     * Generate the display buffer.
     * @param cellSize The size of the cell to generate.
     * @param margin The size of the margins to generate.
     * @returns Boolean buffer of pixels
     */
    generate() {
        this.autoDetectTypeNumber();
        this.makeImpl(false, this.getBestMaskPattern());
        const pixels = [];
        for (let y = 0; y < this._moduleCount; y++) {
            for (let x = 0; x < this._moduleCount; x++) {
                pixels[x] = pixels[x] || [];
                pixels[x][y] = this.isDark(y, x);
            }
        }
        return pixels;
    }
    /* @internal */
    isDark(row, col) {
        if (this._modules[row][col] !== null) {
            return this._modules[row][col];
        }
        else {
            return false;
        }
    }
    /* @internal */
    getBestMaskPattern() {
        let minLostPoint = 0;
        let pattern = 0;
        for (let i = 0; i < 8; i++) {
            this.makeImpl(true, i);
            const lostPoint = this.getLostPoint();
            if (i === 0 || minLostPoint > lostPoint) {
                minLostPoint = lostPoint;
                pattern = i;
            }
        }
        return pattern;
    }
    /* @internal */
    makeImpl(test, maskPattern) {
        this._moduleCount = this._typeNumber * 4 + 17;
        this._modules = [];
        for (let i = 0; i < this._moduleCount; i++) {
            this._modules.push([]);
            for (let j = 0; j < this._moduleCount; j++) {
                this._modules[i].push(null);
            }
        }
        this.setupPositionProbePattern(0, 0);
        this.setupPositionProbePattern(this._moduleCount - 7, 0);
        this.setupPositionProbePattern(0, this._moduleCount - 7);
        this.setupPositionAdjustPattern();
        this.setupTimingPattern();
        this.setupTypeInfo(test, maskPattern);
        if (this._typeNumber >= 7) {
            this.setupTypeNumber(test);
        }
        const data = this.createData();
        this.mapData(data, maskPattern);
    }
    /* @internal */
    mapData(data, maskPattern) {
        let inc = -1;
        let row = this._moduleCount - 1;
        let bitIndex = 7;
        let byteIndex = 0;
        const maskFunc = qrHelper_1.QRHelper.getMaskMethod(maskPattern);
        for (let col = this._moduleCount - 1; col > 0; col -= 2) {
            if (col === 6) {
                col -= 1;
            }
            let flag = true;
            while (flag) {
                for (let c = 0; c < 2; c++) {
                    if (this._modules[row][col - c] === null) {
                        let dark = false;
                        if (byteIndex < data.length) {
                            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1);
                        }
                        const mask = maskFunc(row, col - c);
                        if (mask) {
                            dark = !dark;
                        }
                        this._modules[row][col - c] = dark;
                        bitIndex -= 1;
                        if (bitIndex === -1) {
                            byteIndex++;
                            bitIndex = 7;
                        }
                    }
                }
                row += inc;
                if (row < 0 || this._moduleCount <= row) {
                    row -= inc;
                    inc = -inc;
                    flag = false;
                }
            }
        }
    }
    /* @internal */
    setupPositionAdjustPattern() {
        const pos = qrHelper_1.QRHelper.getPatternPosition(this._typeNumber);
        for (let i = 0; i < pos.length; i++) {
            for (let j = 0; j < pos.length; j++) {
                const row = pos[i];
                const col = pos[j];
                if (this._modules[row][col] !== null) {
                    continue;
                }
                for (let r = -2; r <= 2; r++) {
                    for (let c = -2; c <= 2; c++) {
                        if (r === -2 || r === 2 || c === -2 || c === 2
                            || (r === 0 && c === 0)) {
                            this._modules[row + r][col + c] = true;
                        }
                        else {
                            this._modules[row + r][col + c] = false;
                        }
                    }
                }
            }
        }
    }
    /* @internal */
    setupPositionProbePattern(row, col) {
        for (let r = -1; r <= 7; r++) {
            for (let c = -1; c <= 7; c++) {
                if (row + r <= -1 || this._moduleCount <= row + r
                    || col + c <= -1 || this._moduleCount <= col + c) {
                    continue;
                }
                if ((0 <= r && r <= 6 && (c === 0 || c === 6))
                    || (0 <= c && c <= 6 && (r === 0 || r === 6))
                    || (2 <= r && r <= 4 && 2 <= c && c <= 4)) {
                    this._modules[row + r][col + c] = true;
                }
                else {
                    this._modules[row + r][col + c] = false;
                }
            }
        }
    }
    /* @internal */
    setupTimingPattern() {
        for (let r = 8; r < this._moduleCount - 8; r++) {
            if (this._modules[r][6] !== null) {
                continue;
            }
            this._modules[r][6] = r % 2 === 0;
        }
        for (let c = 8; c < this._moduleCount - 8; c++) {
            if (this._modules[6][c] !== null) {
                continue;
            }
            this._modules[6][c] = c % 2 === 0;
        }
    }
    /* @internal */
    setupTypeNumber(test) {
        const bits = qrHelper_1.QRHelper.getBCHTypeNumber(this._typeNumber);
        for (let i = 0; i < 18; i++) {
            this._modules[~~(i / 3)][i % 3 + this._moduleCount - 8 - 3] =
                !test && ((bits >> i) & 1) === 1;
        }
        for (let i = 0; i < 18; i++) {
            this._modules[i % 3 + this._moduleCount - 8 - 3][~~(i / 3)] =
                !test && ((bits >> i) & 1) === 1;
        }
    }
    /* @internal */
    setupTypeInfo(test, maskPattern) {
        const data = (this._errorCorrectLevel << 3) | maskPattern;
        const bits = qrHelper_1.QRHelper.getBCHTypeInfo(data);
        // vertical
        for (let i = 0; i < 15; i++) {
            const mod = !test && ((bits >> i) & 1) === 1;
            if (i < 6) {
                this._modules[i][8] = mod;
            }
            else if (i < 8) {
                this._modules[i + 1][8] = mod;
            }
            else {
                this._modules[this._moduleCount - 15 + i][8] = mod;
            }
        }
        // horizontal
        for (let i = 0; i < 15; i++) {
            const mod = !test && ((bits >> i) & 1) === 1;
            if (i < 8) {
                this._modules[8][this._moduleCount - i - 1] = mod;
            }
            else if (i < 9) {
                this._modules[8][15 - i - 1 + 1] = mod;
            }
            else {
                this._modules[8][15 - i - 1] = mod;
            }
        }
        // fixed
        this._modules[this._moduleCount - 8][8] = !test;
    }
    /* @internal */
    getLostPoint() {
        const moduleCount = this._moduleCount;
        let lostPoint = 0;
        // LEVEL1
        for (let row = 0; row < moduleCount; row++) {
            for (let col = 0; col < moduleCount; col++) {
                let sameCount = 0;
                const dark = this.isDark(row, col);
                for (let r = -1; r <= 1; r++) {
                    if (row + r < 0 || moduleCount <= row + r) {
                        continue;
                    }
                    for (let c = -1; c <= 1; c++) {
                        if (col + c < 0 || moduleCount <= col + c) {
                            continue;
                        }
                        if (r === 0 && c === 0) {
                            continue;
                        }
                        if (dark === this.isDark(row + r, col + c)) {
                            sameCount++;
                        }
                    }
                }
                if (sameCount > 5) {
                    lostPoint += (3 + sameCount - 5);
                }
            }
        }
        // LEVEL2
        for (let row = 0; row < moduleCount - 1; row++) {
            for (let col = 0; col < moduleCount - 1; col++) {
                let count = 0;
                if (this.isDark(row, col)) {
                    count++;
                }
                if (this.isDark(row + 1, col)) {
                    count++;
                }
                if (this.isDark(row, col + 1)) {
                    count++;
                }
                if (this.isDark(row + 1, col + 1)) {
                    count++;
                }
                if (count === 0 || count === 4) {
                    lostPoint += 3;
                }
            }
        }
        // LEVEL3
        for (let row = 0; row < moduleCount; row++) {
            for (let col = 0; col < moduleCount - 6; col++) {
                if (this.isDark(row, col)
                    && !this.isDark(row, col + 1)
                    && this.isDark(row, col + 2)
                    && this.isDark(row, col + 3)
                    && this.isDark(row, col + 4)
                    && !this.isDark(row, col + 5)
                    && this.isDark(row, col + 6)) {
                    lostPoint += 40;
                }
            }
        }
        for (let col = 0; col < moduleCount; col++) {
            for (let row = 0; row < moduleCount - 6; row++) {
                if (this.isDark(row, col)
                    && !this.isDark(row + 1, col)
                    && this.isDark(row + 2, col)
                    && this.isDark(row + 3, col)
                    && this.isDark(row + 4, col)
                    && !this.isDark(row + 5, col)
                    && this.isDark(row + 6, col)) {
                    lostPoint += 40;
                }
            }
        }
        // LEVEL4
        let darkCount = 0;
        for (let col = 0; col < moduleCount; col++) {
            for (let row = 0; row < moduleCount; row++) {
                if (this.isDark(row, col)) {
                    darkCount++;
                }
            }
        }
        const ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
        lostPoint += ratio * 10;
        return lostPoint;
    }
    /* @internal */
    createData() {
        const rsBlocks = rsBlock_1.RSBlock.getRSBlocks(this._typeNumber, this._errorCorrectLevel);
        const buffer = new bitBuffer_1.BitBuffer();
        for (let i = 0; i < this._qrData.length; i++) {
            const data = this._qrData[i];
            buffer.put(data.getMode(), 4);
            buffer.put(data.getLength(), data.getLengthInBits(this._typeNumber));
            data.write(buffer);
        }
        // calc max data count
        let totalDataCount = 0;
        for (let i = 0; i < rsBlocks.length; i++) {
            totalDataCount += rsBlocks[i].getDataCount();
        }
        if (buffer.getLengthInBits() > totalDataCount * 8) {
            throw new Error(`There is not enough space in the QR code to store the data, ${buffer.getLengthInBits()} > ${totalDataCount * 8}, try increasing the typeNumber from ${this._typeNumber}`);
        }
        // end
        if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
            buffer.put(0, 4);
        }
        // padding
        while (buffer.getLengthInBits() % 8 !== 0) {
            buffer.putBit(false);
        }
        // padding
        let flag = true;
        while (flag) {
            if (buffer.getLengthInBits() >= totalDataCount * 8) {
                break;
            }
            buffer.put(QR.PAD0, 8);
            if (buffer.getLengthInBits() >= totalDataCount * 8) {
                flag = false;
            }
            else {
                buffer.put(QR.PAD1, 8);
            }
        }
        return this.createBytes(buffer, rsBlocks);
    }
    /* @internal */
    createBytes(buffer, rsBlocks) {
        let offset = 0;
        let maxDcCount = 0;
        let maxEcCount = 0;
        const dcdata = [];
        const ecdata = [];
        for (let r = 0; r < rsBlocks.length; r++) {
            dcdata.push([]);
            ecdata.push([]);
        }
        function createNumArray(len) {
            const a = [];
            for (let i = 0; i < len; i++) {
                a.push(0);
            }
            return a;
        }
        // tslint:disable:no-console
        for (let r = 0; r < rsBlocks.length; r++) {
            const dcCount = rsBlocks[r].getDataCount();
            const ecCount = rsBlocks[r].getTotalCount() - dcCount;
            maxDcCount = Math.max(maxDcCount, dcCount);
            maxEcCount = Math.max(maxEcCount, ecCount);
            dcdata[r] = createNumArray(dcCount);
            for (let i = 0; i < dcdata[r].length; i++) {
                dcdata[r][i] = 0xFF & buffer.getBuffer()[i + offset];
            }
            offset += dcCount;
            const rsPoly = qrHelper_1.QRHelper.getErrorCorrectPolynomial(ecCount);
            const rawPoly = new polynomial_1.Polynomial(dcdata[r], rsPoly.getLength() - 1);
            const modPoly = rawPoly.mod(rsPoly);
            ecdata[r] = createNumArray(rsPoly.getLength() - 1);
            for (let i = 0; i < ecdata[r].length; i++) {
                const modIndex = i + modPoly.getLength() - ecdata[r].length;
                ecdata[r][i] = (modIndex >= 0) ? modPoly.getAt(modIndex) : 0;
            }
        }
        let totalCodeCount = 0;
        for (let i = 0; i < rsBlocks.length; i++) {
            totalCodeCount += rsBlocks[i].getTotalCount();
        }
        const data = createNumArray(totalCodeCount);
        let index = 0;
        for (let i = 0; i < maxDcCount; i++) {
            for (let r = 0; r < rsBlocks.length; r++) {
                if (i < dcdata[r].length) {
                    data[index] = dcdata[r][i];
                    index++;
                }
            }
        }
        for (let i = 0; i < maxEcCount; i++) {
            for (let r = 0; r < rsBlocks.length; r++) {
                if (i < ecdata[r].length) {
                    data[index] = ecdata[r][i];
                    index++;
                }
            }
        }
        return data;
    }
    /* @internal */
    autoDetectTypeNumber() {
        if (this._typeNumber === 0) {
            for (let typeNumber = 1; typeNumber <= 40; typeNumber++) {
                const rsBlocks = rsBlock_1.RSBlock.getRSBlocks(typeNumber, this._errorCorrectLevel);
                const buffer = new bitBuffer_1.BitBuffer();
                for (let i = 0; i < this._qrData.length; i++) {
                    const data = this._qrData[i];
                    buffer.put(data.getMode(), 4);
                    buffer.put(data.getLength(), data.getLengthInBits(typeNumber));
                    data.write(buffer);
                }
                let totalDataCount = 0;
                for (let i = 0; i < rsBlocks.length; i++) {
                    totalDataCount += rsBlocks[i].getDataCount();
                }
                if (buffer.getLengthInBits() <= totalDataCount * 8) {
                    this._typeNumber = typeNumber;
                    break;
                }
                else if (typeNumber === 40) {
                    throw new Error(`There is not enough space in the QR code to store the data, ${buffer.getLengthInBits()} > ${totalDataCount * 8}, typeNumber can not be > 40`);
                }
            }
        }
    }
}
/* @internal */
QR.PAD0 = 0xEC;
/* @internal */
QR.PAD1 = 0x11;
exports.QR = QR;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9GQUFpRjtBQUNqRiwwREFBdUQ7QUFDdkQsNENBQXlDO0FBQ3pDLDhDQUEyQztBQUMzQyxtREFBZ0Q7QUFDaEQscURBQWtEO0FBQ2xELHFEQUFrRDtBQUNsRCxpREFBOEM7QUFDOUMsK0NBQTRDO0FBQzVDLGtFQUErRDtBQUkvRDs7O0dBR0c7QUFDSDtJQXFCSTs7OztPQUlHO0lBQ0gsWUFBWSxhQUFxQixDQUFDLEVBQUUsb0JBQXVDLHFDQUFpQixDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsR0FBRyxDQUFDLElBQUksVUFBVSxHQUFHLEVBQUUsRUFBRTtZQUMxRSxNQUFNLEtBQUssQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO1NBQzdFO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRW5CLHVCQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE9BQU8sQ0FBQyxNQUFjO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxTQUFTLENBQUMsTUFBYztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lB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
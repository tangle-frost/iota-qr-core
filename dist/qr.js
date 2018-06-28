Object.defineProperty(exports, "__esModule", { value: true });
const qrByte8_1 = require("./data/qrByte8");
const bitBuffer_1 = require("./helpers/bitBuffer");
const mathHelper_1 = require("./helpers/mathHelper");
const polynomial_1 = require("./helpers/polynomial");
const qrHelper_1 = require("./helpers/qrHelper");
const rsBlock_1 = require("./helpers/rsBlock");
const errorCorrectLevel_1 = require("./models/errorCorrectLevel");
const qrDataBase_1 = require("./models/qrDataBase");
/**
 * Class to generates QR codes from data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
class QR {
    /**
     * Create a new instance of QR.
     * @param typeNumber 1 to 40
     * @param errorCorrectLevel 'L','M','Q','H'
     */
    constructor(typeNumber = 1, errorCorrectLevel = errorCorrectLevel_1.ErrorCorrectLevel.L) {
        this._typeNumber = typeNumber;
        this._errorCorrectLevel = errorCorrectLevel;
        this._qrData = [];
        this._moduleCount = 0;
        this._modules = [];
        mathHelper_1.MathHelper.initialize();
    }
    /**
     * Add data to the QR Code.
     * @param qrData The data to add.
     */
    addData(qrData) {
        if (qrData instanceof qrDataBase_1.QRDataBase) {
            this._qrData.push(qrData);
        }
        else if (typeof qrData === "string") {
            this._qrData.push(new qrByte8_1.QRByte8(qrData));
        }
        else {
            throw typeof qrData;
        }
    }
    /**
     * Generate the display buffer.
     * @param cellSize The size of the cell to generate.
     * @param margin The size of the margins to generate.
     * @returns Boolean buffer of pixels
     */
    generate(cellSize = 2, margin = cellSize * 4) {
        this.makeImpl(false, this.getBestMaskPattern());
        const mods = this._moduleCount;
        const size = cellSize * mods + margin * 2;
        const pixels = [];
        for (let y = 0; y < size; y += 1) {
            for (let x = 0; x < size; x += 1) {
                if (margin <= x && x < size - margin &&
                    margin <= y && y < size - margin &&
                    this.isDark(~~((y - margin) / cellSize), ~~((x - margin) / cellSize))) {
                    pixels[x][y] = false;
                }
                else {
                    pixels[x][y] = true;
                }
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
        const data = this.createData(this._typeNumber, this._errorCorrectLevel, this._qrData);
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
    createData(typeNumber, errorCorrectLevel, dataArray) {
        const rsBlocks = rsBlock_1.RSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
        const buffer = new bitBuffer_1.BitBuffer();
        for (let i = 0; i < dataArray.length; i++) {
            const data = dataArray[i];
            buffer.put(data.getMode(), 4);
            buffer.put(data.getLength(), data.getLengthInBits(typeNumber));
            data.write(buffer);
        }
        // calc max data count
        let totalDataCount = 0;
        for (let i = 0; i < rsBlocks.length; i++) {
            totalDataCount += rsBlocks[i].getDataCount();
        }
        if (buffer.getLengthInBits() > totalDataCount * 8) {
            throw new Error(`Code length overflow, (${buffer.getLengthInBits()} > ${totalDataCount * 8}`);
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
}
/* @internal */
QR.PAD0 = 0xEC;
/* @internal */
QR.PAD1 = 0x11;
exports.QR = QR;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRDQUF5QztBQUN6QyxtREFBZ0Q7QUFDaEQscURBQWtEO0FBQ2xELHFEQUFrRDtBQUNsRCxpREFBOEM7QUFDOUMsK0NBQTRDO0FBQzVDLGtFQUErRDtBQUMvRCxvREFBaUQ7QUFFakQ7OztHQUdHO0FBQ0g7SUFxQkk7Ozs7T0FJRztJQUNILFlBQVksYUFBcUIsQ0FBQyxFQUFFLG9CQUF1QyxxQ0FBaUIsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVuQix1QkFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxPQUFPLENBQUMsTUFBMkI7UUFDdEMsSUFBSSxNQUFNLFlBQVksdUJBQVUsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM3QjthQUFNLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDSCxNQUFNLE9BQU8sTUFBTSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksUUFBUSxDQUFDLFdBQW1CLENBQUMsRUFBRSxTQUFpQixRQUFRLEdBQUcsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMs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
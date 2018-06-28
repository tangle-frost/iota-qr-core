Object.defineProperty(exports, "__esModule", { value: true });
const qrDataBase_1 = require("../models/qrDataBase");
const qrDataMode_1 = require("../models/qrDataMode");
/**
 * QR Data for representing a number.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
class QRNumber extends qrDataBase_1.QRDataBase {
    /**
     * Create a new instance of QRNumber.
     * @param data The data for the qr number.
     */
    constructor(data) {
        super(qrDataMode_1.QRDataMode.number, data);
    }
    /**
     * Get the length of the data.
     * @returns The length of the data.
     */
    getLength() {
        return this.getData().length;
    }
    /**
     * Write data into the buffer.
     * @param buffer The buffer to write into.
     */
    write(buffer) {
        const data = this.getData();
        let i = 0;
        while (i + 2 < data.length) {
            buffer.put(this.strToNum(data.substring(i, i + 3)), 10);
            i += 3;
        }
        if (i < data.length) {
            if (data.length - i === 1) {
                buffer.put(this.strToNum(data.substring(i, i + 1)), 4);
            }
            else if (data.length - i === 2) {
                buffer.put(this.strToNum(data.substring(i, i + 2)), 7);
            }
        }
    }
    /* @internal */
    strToNum(s) {
        let num = 0;
        for (let i = 0; i < s.length; i++) {
            num = num * 10 + this.charToNum(s.charAt(i));
        }
        return num;
    }
    /* @internal */
    charToNum(c) {
        if ("0" <= c && c <= "9") {
            return c.charCodeAt(0) - "0".charCodeAt(0);
        }
        throw new Error(`Illegal character in string : ${c}`);
    }
}
exports.QRNumber = QRNumber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXJOdW1iZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS9xck51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EscURBQWtEO0FBQ2xELHFEQUFrRDtBQUVsRDs7O0dBR0c7QUFDSCxjQUFzQixTQUFRLHVCQUFVO0lBQ3BDOzs7T0FHRztJQUNILFlBQVksSUFBWTtRQUNwQixLQUFLLENBQUMsdUJBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFNBQVM7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUssQ0FBQyxNQUFpQjtRQUMxQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELENBQUMsSUFBSSxDQUFDLENBQUM7U0FDVjtRQUVELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMxRDtpQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzFEO1NBQ0o7SUFDTCxDQUFDO0lBRUQsZUFBZTtJQUNQLFFBQVEsQ0FBQyxDQUFTO1FBQ3RCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9CLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsZUFBZTtJQUNQLFNBQVMsQ0FBQyxDQUFTO1FBQ3ZCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0NBQ0o7QUF4REQsNEJBd0RDIn0=
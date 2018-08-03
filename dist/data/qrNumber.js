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
        if (c >= "0" && c <= "9") {
            return c.charCodeAt(0) - "0".charCodeAt(0);
        }
        throw new Error(`Illegal character in string : ${c}`);
    }
}
exports.QRNumber = QRNumber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXJOdW1iZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS9xck51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EscURBQWtEO0FBQ2xELHFEQUFrRDtBQUVsRDs7O0dBR0c7QUFDSCxNQUFhLFFBQVMsU0FBUSx1QkFBVTtJQUNwQzs7O09BR0c7SUFDSCxZQUFZLElBQVk7UUFDcEIsS0FBSyxDQUFDLHVCQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7O09BR0c7SUFDSSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsTUFBaUI7UUFDMUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTVCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN4RCxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ1Y7UUFFRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDMUQ7aUJBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMxRDtTQUNKO0lBQ0wsQ0FBQztJQUVELGVBQWU7SUFDUCxRQUFRLENBQUMsQ0FBUztRQUN0QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQixHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELGVBQWU7SUFDUCxTQUFTLENBQUMsQ0FBUztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRTtZQUN0QixPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QztRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUNKO0FBeERELDRCQXdEQyJ9
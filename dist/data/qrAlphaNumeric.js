Object.defineProperty(exports, "__esModule", { value: true });
const qrDataBase_1 = require("../models/qrDataBase");
const qrDataMode_1 = require("../models/qrDataMode");
/**
 * QR Data for representing a alpha numeric.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
class QRAlphaNumeric extends qrDataBase_1.QRDataBase {
    /**
     * Create a new instance of QRAlphaNumeric.
     * @param data The data for the qr alpha numeric.
     */
    constructor(data) {
        super(qrDataMode_1.QRDataMode.alphaNumeric, data);
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
        const s = this.getData();
        let i = 0;
        while (i + 1 < s.length) {
            buffer.put(this.getCode(s.charAt(i)) * 45 +
                this.getCode(s.charAt(i + 1)), 11);
            i += 2;
        }
        if (i < s.length) {
            buffer.put(this.getCode(s.charAt(i)), 6);
        }
    }
    /* @internal */
    getCode(c) {
        if (c >= "0" && c <= "9") {
            return c.charCodeAt(0) - "0".charCodeAt(0);
        }
        else if (c >= "A" && c <= "Z") {
            return c.charCodeAt(0) - "A".charCodeAt(0) + 10;
        }
        else {
            switch (c) {
                case " ": return 36;
                case "$": return 37;
                case "%": return 38;
                case "*": return 39;
                case "+": return 40;
                case "-": return 41;
                case ".": return 42;
                case "/": return 43;
                case ":": return 44;
                default:
                    throw new Error(`Illegal character in string : ${c}`);
            }
        }
    }
}
exports.QRAlphaNumeric = QRAlphaNumeric;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXJBbHBoYU51bWVyaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS9xckFscGhhTnVtZXJpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EscURBQWtEO0FBQ2xELHFEQUFrRDtBQUVsRDs7O0dBR0c7QUFDSCxNQUFhLGNBQWUsU0FBUSx1QkFBVTtJQUMxQzs7O09BR0c7SUFDSCxZQUFZLElBQVk7UUFDcEIsS0FBSyxDQUFDLHVCQUFVLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsTUFBaUI7UUFDMUIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxHQUFHLENBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUM3QixFQUFFLENBQUMsQ0FBQztZQUNSLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDVjtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDZCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQztJQUVELGVBQWU7SUFDUCxPQUFPLENBQUMsQ0FBUztRQUVyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRTtZQUN0QixPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QzthQUFNLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNuRDthQUFNO1lBQ0gsUUFBUSxDQUFDLEVBQUU7Z0JBQ1AsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEI7b0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM3RDtTQUNKO0lBQ0wsQ0FBQztDQUNKO0FBN0RELHdDQTZEQyJ9
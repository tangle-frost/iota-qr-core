Object.defineProperty(exports, "__esModule", { value: true });
const qrDataBase_1 = require("../models/qrDataBase");
const qrDataMode_1 = require("../models/qrDataMode");
/**
 * QR Data for representing a 8 bit data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
class QRByte8 extends qrDataBase_1.QRDataBase {
    /**
     * Create a new instance of QRByte8.
     * @param data The data for the qr 8 bit data.
     */
    constructor(data) {
        super(qrDataMode_1.QRDataMode.byte8, data);
    }
    /**
     * Get the length of the data.
     * @returns The length of the data.
     */
    getLength() {
        return this.stringToBytes(this.getData()).length;
    }
    /**
     * Write data into the buffer.
     * @param buffer The buffer to write into.
     */
    write(buffer) {
        const data = this.stringToBytes(this.getData());
        for (let i = 0; i < data.length; i++) {
            buffer.put(data[i], 8);
        }
    }
    /* @internal */
    stringToBytes(str) {
        const utf8 = [];
        for (let i = 0; i < str.length; i++) {
            let charcode = str.charCodeAt(i);
            if (charcode < 0x80) {
                utf8.push(charcode);
            }
            else if (charcode < 0x800) {
                utf8.push(0xC0 | (charcode >> 6), 0x80 | (charcode & 0x3F));
            }
            else if (charcode < 0xD800 || charcode >= 0xE000) {
                utf8.push(0xE0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3F), 0x80 | (charcode & 0x3F));
            }
            else {
                i++;
                // UTF-16 encodes 0x10000-0x10FFFF by
                // subtracting 0x10000 and splitting the
                // 20 bits of 0x0-0xFFFFF into two halves
                charcode = 0x10000 + (((charcode & 0x3FF) << 10)
                    | (str.charCodeAt(i) & 0x3FF));
                utf8.push(0xF0 | (charcode >> 18), 0x80 | ((charcode >> 12) & 0x3F), 0x80 | ((charcode >> 6) & 0x3F), 0x80 | (charcode & 0x3F));
            }
        }
        return utf8;
    }
}
exports.QRByte8 = QRByte8;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXJCeXRlOC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL3FyQnl0ZTgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHFEQUFrRDtBQUNsRCxxREFBa0Q7QUFFbEQ7OztHQUdHO0FBQ0gsYUFBcUIsU0FBUSx1QkFBVTtJQUNuQzs7O09BR0c7SUFDSCxZQUFZLElBQVk7UUFDcEIsS0FBSyxDQUFDLHVCQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNyRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLE1BQWlCO1FBQzFCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDaEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRUQsZUFBZTtJQUNQLGFBQWEsQ0FBQyxHQUFXO1FBQzdCLE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztRQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksUUFBUSxHQUFHLElBQUksRUFBRTtnQkFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN2QjtpQkFBTSxJQUFJLFFBQVEsR0FBRyxLQUFLLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxFQUN0QixJQUFJLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN2QztpQkFBTSxJQUFJLFFBQVEsR0FBRyxNQUFNLElBQUksUUFBUSxJQUFJLE1BQU0sRUFBRTtnQkFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEVBQ3ZCLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUMvQixJQUFJLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN2QztpQkFBTTtnQkFDSCxDQUFDLEVBQUUsQ0FBQztnQkFDSixxQ0FBcUM7Z0JBQ3JDLHdDQUF3QztnQkFDeEMseUNBQXlDO2dCQUN6QyxRQUFRLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7c0JBQzFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsRUFDdkIsSUFBSSxHQUFHLENBQUMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQ2hDLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUMvQixJQUFJLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN2QztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKO0FBekRELDBCQXlEQyJ9
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXJCeXRlOC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL3FyQnl0ZTgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHFEQUFrRDtBQUNsRCxxREFBa0Q7QUFFbEQ7OztHQUdHO0FBQ0gsTUFBYSxPQUFRLFNBQVEsdUJBQVU7SUFDbkM7OztPQUdHO0lBQ0gsWUFBWSxJQUFZO1FBQ3BCLEtBQUssQ0FBQyx1QkFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUssQ0FBQyxNQUFpQjtRQUMxQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVELGVBQWU7SUFDUCxhQUFhLENBQUMsR0FBVztRQUM3QixNQUFNLElBQUksR0FBYSxFQUFFLENBQUM7UUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLFFBQVEsR0FBRyxJQUFJLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdkI7aUJBQU0sSUFBSSxRQUFRLEdBQUcsS0FBSyxFQUFFO2dCQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsRUFDdEIsSUFBSSxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDdkM7aUJBQU0sSUFBSSxRQUFRLEdBQUcsTUFBTSxJQUFJLFFBQVEsSUFBSSxNQUFNLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxFQUN2QixJQUFJLEdBQUcsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFDL0IsSUFBSSxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDdkM7aUJBQU07Z0JBQ0gsQ0FBQyxFQUFFLENBQUM7Z0JBQ0oscUNBQXFDO2dCQUNyQyx3Q0FBd0M7Z0JBQ3hDLHlDQUF5QztnQkFDekMsUUFBUSxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO3NCQUMxQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEVBQ3ZCLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUNoQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFDL0IsSUFBSSxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDdkM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQXpERCwwQkF5REMifQ==
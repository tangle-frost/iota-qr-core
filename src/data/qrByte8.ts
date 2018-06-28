import { BitBuffer } from "../helpers/bitBuffer";
import { QRDataBase } from "../models/qrDataBase";
import { QRDataMode } from "../models/qrDataMode";

/**
 * QR Data for representing a 8 bit data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export class QRByte8 extends QRDataBase {
    /**
     * Create a new instance of QRByte8.
     * @param data The data for the qr 8 bit data.
     */
    constructor(data: string) {
        super(QRDataMode.byte8, data);
    }

    /**
     * Get the length of the data.
     * @returns The length of the data.
     */
    public getLength(): number {
        return this.stringToBytes(this.getData()).length;
    }

    /**
     * Write data into the buffer.
     * @param buffer The buffer to write into.
     */
    public write(buffer: BitBuffer): void {
        const data = this.stringToBytes(this.getData());
        for (let i = 0; i < data.length; i++) {
            buffer.put(data[i], 8);
        }
    }

    /* @internal */
    private stringToBytes(str: string): number[] {
        const utf8: number[] = [];
        for (let i = 0; i < str.length; i++) {
            let charcode = str.charCodeAt(i);
            if (charcode < 0x80) {
                utf8.push(charcode);
            } else if (charcode < 0x800) {
                utf8.push(0xC0 | (charcode >> 6),
                          0x80 | (charcode & 0x3F));
            } else if (charcode < 0xD800 || charcode >= 0xE000) {
                utf8.push(0xE0 | (charcode >> 12),
                          0x80 | ((charcode >> 6) & 0x3F),
                          0x80 | (charcode & 0x3F));
            } else {
                i++;
                // UTF-16 encodes 0x10000-0x10FFFF by
                // subtracting 0x10000 and splitting the
                // 20 bits of 0x0-0xFFFFF into two halves
                charcode = 0x10000 + (((charcode & 0x3FF) << 10)
                    | (str.charCodeAt(i) & 0x3FF));
                utf8.push(0xF0 | (charcode >> 18),
                          0x80 | ((charcode >> 12) & 0x3F),
                          0x80 | ((charcode >> 6) & 0x3F),
                          0x80 | (charcode & 0x3F));
            }
        }
        return utf8;
    }
}

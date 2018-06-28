import { BitBuffer } from "../helpers/bitBuffer";
import { QRDataBase } from "../models/qrDataBase";
import { QRDataMode } from "../models/qrDataMode";

/**
 * QR Data for representing a number.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export class QRNumber extends QRDataBase {
    /**
     * Create a new instance of QRNumber.
     * @param data The data for the qr number.
     */
    constructor(data: string) {
        super(QRDataMode.number, data);
    }

    /**
     * Get the length of the data.
     * @returns The length of the data.
     */
    public getLength(): number {
        return this.getData().length;
    }

    /**
     * Write data into the buffer.
     * @param buffer The buffer to write into.
     */
    public write(buffer: BitBuffer): void {
        const data = this.getData();

        let i = 0;

        while (i + 2 < data.length) {
            buffer.put(this.strToNum(data.substring(i, i + 3)), 10);
            i += 3;
        }

        if (i < data.length) {
            if (data.length - i === 1) {
                buffer.put(this.strToNum(data.substring(i, i + 1)), 4);
            } else if (data.length - i === 2) {
                buffer.put(this.strToNum(data.substring(i, i + 2)), 7);
            }
        }
    }

    /* @internal */
    private strToNum(s: string): number {
        let num = 0;
        for (let i = 0; i < s.length; i++) {
            num = num * 10 + this.charToNum(s.charAt(i));
        }
        return num;
    }

    /* @internal */
    private charToNum(c: string): number {
        if ("0" <= c && c <= "9") {
            return c.charCodeAt(0) - "0".charCodeAt(0);
        }
        throw new Error(`Illegal character in string : ${c}`);
    }
}

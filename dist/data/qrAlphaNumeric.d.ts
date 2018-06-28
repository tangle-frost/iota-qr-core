import { BitBuffer } from "../helpers/bitBuffer";
import { QRDataBase } from "../models/qrDataBase";
/**
 * QR Data for representing a alpha numeric.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export declare class QRAlphaNumeric extends QRDataBase {
    /**
     * Create a new instance of QRAlphaNumeric.
     * @param data The data for the qr alpha numeric.
     */
    constructor(data: string);
    /**
     * Get the length of the data.
     * @returns The length of the data.
     */
    getLength(): number;
    /**
     * Write data into the buffer.
     * @param buffer The buffer to write into.
     */
    write(buffer: BitBuffer): void;
}

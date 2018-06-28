import { BitBuffer } from "../helpers/bitBuffer";
import { QRDataBase } from "../models/qrDataBase";
/**
 * QR Data for representing a number.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export declare class QRNumber extends QRDataBase {
    /**
     * Create a new instance of QRNumber.
     * @param data The data for the qr number.
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

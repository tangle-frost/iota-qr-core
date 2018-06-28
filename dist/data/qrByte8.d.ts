import { BitBuffer } from "../helpers/bitBuffer";
import { QRDataBase } from "../models/qrDataBase";
/**
 * QR Data for representing a 8 bit data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export declare class QRByte8 extends QRDataBase {
    /**
     * Create a new instance of QRByte8.
     * @param data The data for the qr 8 bit data.
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

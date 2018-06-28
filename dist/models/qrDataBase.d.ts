import { BitBuffer } from "../helpers/bitBuffer";
import { QRDataMode } from "./qrDataMode";
/**
 * Base class for storing QR Data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export declare abstract class QRDataBase {
    /**
     * Create a new instance of QRDataBase.
     * @param mode The mode for the data.
     * @param data The data.
     */
    constructor(mode: QRDataMode, data: string);
    /**
     * Get the data mode.
     * @returns The data mode.
     */
    getMode(): QRDataMode;
    /**
     * Get the data.
     * @returns The data.
     */
    getData(): string;
    /**
     * Get the length of the data.
     * @returns The length of the data.
     */
    abstract getLength(): number;
    /**
     * Write data into the buffer.
     * @param buffer The buffer to write into.
     */
    abstract write(buffer: BitBuffer): void;
    /**
     * Get the length in bits of the data.
     * @param typeNumber The type number to get the length for.
     * @returns The length in bits.
     */
    getLengthInBits(typeNumber: number): number;
}

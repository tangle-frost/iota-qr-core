import { ErrorCorrectLevel } from "./models/errorCorrectLevel";
import { QRCellData } from "./models/qrCellData";
/**
 * Class to generates QR codes from data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export declare class QR {
    /**
     * Create a new instance of QR.
     * @param typeNumber 1 to 40
     * @param errorCorrectLevel 'L','M','Q','H'
     */
    constructor(typeNumber?: number, errorCorrectLevel?: ErrorCorrectLevel);
    /**
     * Add text data to the QR Code.
     * @param qrData The data to add.
     */
    addText(qrData: string): void;
    /**
     * Add number to the QR Code.
     * @param qrData The data to add.
     */
    addNumber(qrData: string): void;
    /**
     * Add alpha numeric to the QR Code.
     * @param qrData The data to add.
     */
    addAlphaNumeric(qrData: string): void;
    /**
     * Generate the display buffer.
     * @param cellSize The size of the cell to generate.
     * @param margin The size of the margins to generate.
     * @returns Boolean buffer of pixels
     */
    generate(): QRCellData;
}

import { ErrorCorrectLevel } from "./models/errorCorrectLevel";
import { QRCellData } from "./models/qrCellData";
import { QRDataBase } from "./models/qrDataBase";
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
     * Add data to the QR Code.
     * @param qrData The data to add.
     */
    addData(qrData: QRDataBase | string): void;
    /**
     * Generate the display buffer.
     * @param cellSize The size of the cell to generate.
     * @param margin The size of the margins to generate.
     * @returns Boolean buffer of pixels
     */
    generate(): QRCellData;
}

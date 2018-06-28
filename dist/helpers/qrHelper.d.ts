import { ErrorCorrectLevel } from "../models/errorCorrectLevel";
import { QRDataMode } from "../models/qrDataMode";
import { Polynomial } from "./polynomial";
/**
 * Helper methods for QR generation.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export declare class QRHelper {
    /**
     * Get the pattern position for the given type number.
     * @param typeNumber The type number to get the pattern for.
     * @returns The pattern for the type number.
     */
    static getPatternPosition(typeNumber: number): number[];
    /**
     * Get the max length of the data.
     * @param typeNumber The type number to get the max length for.
     * @param mode The data mode to get data max length for.
     * @param errorCorrectLevel The error correction to get the max length for.
     * @returns The max length.
     */
    static getMaxLength(typeNumber: number, mode: QRDataMode, errorCorrectLevel: ErrorCorrectLevel): number;
    /**
     * Get the error correction polynomial for the error correcto length.
     * @param errorCorrectLength The error correction length to get the polynomial for.
     * @returns The polynomial for the error correction length.
     */
    static getErrorCorrectPolynomial(errorCorrectLength: number): Polynomial;
    /**
     * Get the mask method for the given pattern.
     * @param maskPattern The pattern to get the mask for.
     * @returns The mask method for the pattern.
     */
    static getMaskMethod(maskPattern: number): (i: number, j: number) => boolean;
    /**
     * Get the BCH type info.
     * @param data The data to get the BCH type info for.
     * @returns The type info.
     */
    static getBCHTypeInfo(data: number): number;
    /**
     * Get the BCH type number.
     * @param data The data to get the BCH type number for.
     * @returns The type number.
     */
    static getBCHTypeNumber(data: number): number;
}

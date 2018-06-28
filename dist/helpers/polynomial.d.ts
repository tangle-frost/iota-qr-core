/**
 * Class to represent a polynomial.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export declare class Polynomial {
    /**
     * Create a new instance of Polynomial.
     * @param num The num of the polynomial.
     * @param shift The shift for the polynomial.
     */
    constructor(num: number[], shift?: number);
    /**
     * The the value of the polynomial at given index.
     * @param index The index.
     * @returns The value of the polynomial.
     */
    getAt(index: number): number;
    /**
     * Get the length of the polynomial.
     * @returns The polynomial.
     */
    getLength(): number;
    /**
     * Convert the polynomial to a string.
     * @returns The string representation of the polynomial.
     */
    toString(): string;
    /**
     * Get the log representation of the polynomial.
     * @returns The log representation of the polynomial.
     */
    toLogString(): string;
    /**
     * Multiply the polynomial with another one.
     * @param e The polynomial to multiply.
     * @returns The multiplication of the polynomials.
     */
    multiply(e: Polynomial): Polynomial;
    /**
     * Get the modulus of the polynomial from another.
     * @param e The polynomial.
     * @returns The modules of the polynomials.
     */
    mod(e: Polynomial): Polynomial;
}

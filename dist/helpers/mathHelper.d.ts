/**
 * Class to helper with math.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export declare class MathHelper {
    /**
     * Initialize the math helper.
     */
    static initialize(): void;
    /**
     * Get the log of the value.
     * @param value The value to get the log of.
     * @returns the log of the value.
     */
    static glog(value: number): number;
    /**
     * Get the exponent of the value.
     * @param value The value to get the exponent of.
     * @returns The exponent of the value.
     */
    static gexp(value: number): number;
}

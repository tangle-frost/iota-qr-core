/**
 * Error correction level to use for the QR Code.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export declare enum ErrorCorrectLevel {
    /**
     * 7%
     */
    L = 1,
    /**
     * 15%
     */
    M = 0,
    /**
     * 25%
     */
    Q = 3,
    /**
     * 30%
     */
    H = 2
}

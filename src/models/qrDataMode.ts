/**
 * The mode for the qr data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export enum QRDataMode {
    /**
     * number
     */
    number = 1 << 0,

    /**
     * alphabet and number
     */
    alphaNumeric = 1 << 1,

    /**
     * 8bit byte
     */
    byte8 = 1 << 2
}

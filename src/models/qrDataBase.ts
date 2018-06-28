import { BitBuffer } from "../helpers/bitBuffer";
import { QRDataMode } from "./qrDataMode";

/**
 * Base class for storing QR Data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export abstract class QRDataBase {
    /* @internal */
    private readonly _mode: QRDataMode;
    /* @internal */
    private readonly _data: string;

    /**
     * Create a new instance of QRDataBase.
     * @param mode The mode for the data.
     * @param data The data.
     */
    constructor(mode: QRDataMode, data: string) {
        this._mode = mode;
        this._data = data;
    }

    /**
     * Get the data mode.
     * @returns The data mode.
     */
    public getMode(): QRDataMode {
        return this._mode;
    }

    /**
     * Get the data.
     * @returns The data.
     */
    public getData(): string {
        return this._data;
    }

    /**
     * Get the length of the data.
     * @returns The length of the data.
     */
    public abstract getLength(): number;

    /**
     * Write data into the buffer.
     * @param buffer The buffer to write into.
     */
    public abstract write(buffer: BitBuffer): void;

    /**
     * Get the length in bits of the data.
     * @param typeNumber The type number to get the length for.
     * @returns The length in bits.
     */
    public getLengthInBits(typeNumber: number): number {
        if (typeNumber >= 1 && typeNumber < 10) {
            switch (this._mode) {
                case QRDataMode.number: return 10;
                case QRDataMode.alphaNumeric: return 9;
                case QRDataMode.byte8: return 8;
                default:
                    throw new Error(`Invalid mode ${this._mode}`);
            }
        } else if (typeNumber < 27) {
            switch (this._mode) {
                case QRDataMode.number: return 12;
                case QRDataMode.alphaNumeric: return 11;
                case QRDataMode.byte8: return 16;
                default:
                    throw new Error(`Invalid mode ${this._mode}`);
            }
        } else if (typeNumber < 41) {
            switch (this._mode) {
                case QRDataMode.number: return 14;
                case QRDataMode.alphaNumeric: return 13;
                case QRDataMode.byte8: return 16;
                default:
                    throw new Error(`Invalid mode ${this._mode}`);
            }
        } else {
            throw new Error(`Invalid typeNumber ${typeNumber}`);
        }
    }
}

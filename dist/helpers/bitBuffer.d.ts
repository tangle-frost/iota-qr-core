/**
 * Class for maintaining data bits.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export declare class BitBuffer {
    private readonly _buffer;
    private _length;
    constructor();
    getBuffer(): number[];
    getLengthInBits(): number;
    put(num: number, length: number): void;
    putBit(bit: boolean): void;
    toString(): string;
    private getBit;
}

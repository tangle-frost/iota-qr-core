/**
 * Class for maintaining data bits.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export class BitBuffer {
    private readonly _buffer: number[];
    private _length: number;

    public constructor() {
        this._buffer = [];
        this._length = 0;
    }

    public getBuffer(): number[] {
        return this._buffer;
    }

    public getLengthInBits(): number {
        return this._length;
    }

    public put(num: number, length: number): void {
        for (let i = 0; i < length; i++) {
            this.putBit(((num >>> (length - i - 1)) & 1) === 1);
        }
    }

    public putBit(bit: boolean): void {
        if (this._length === this._buffer.length * 8) {
            this._buffer.push(0);
        }
        if (bit) {
            this._buffer[~~(this._length / 8)] |= (0x80 >>> (this._length % 8));
        }
        this._length++;
    }

    public toString(): string {
        let buffer = "";
        for (let i = 0; i < this.getLengthInBits(); i++) {
            buffer += this.getBit(i) ? "1" : "0";
        }
        return buffer;
    }

    private getBit(index: number): boolean {
        return ((this._buffer[~~(index / 8)] >>> (7 - index % 8)) & 1) === 1;
    }
}

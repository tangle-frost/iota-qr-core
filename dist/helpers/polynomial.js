Object.defineProperty(exports, "__esModule", { value: true });
const mathHelper_1 = require("./mathHelper");
/**
 * Class to represent a polynomial.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
class Polynomial {
    /**
     * Create a new instance of Polynomial.
     * @param num The num of the polynomial.
     * @param shift The shift for the polynomial.
     */
    constructor(num, shift = 0) {
        let offset = 0;
        while (offset < num.length && num[offset] === 0) {
            offset++;
        }
        this._num = [];
        const len = num.length - offset;
        for (let i = 0; i < len; i++) {
            this._num.push(num[offset + i]);
        }
        for (let i = 0; i < shift; i++) {
            this._num.push(0);
        }
    }
    /**
     * The the value of the polynomial at given index.
     * @param index The index.
     * @returns The value of the polynomial.
     */
    getAt(index) {
        return this._num[index];
    }
    /**
     * Get the length of the polynomial.
     * @returns The polynomial.
     */
    getLength() {
        return this._num.length;
    }
    /**
     * Convert the polynomial to a string.
     * @returns The string representation of the polynomial.
     */
    toString() {
        let buffer = "";
        for (let i = 0; i < this.getLength(); i++) {
            if (i > 0) {
                buffer += ",";
            }
            buffer += this.getAt(i);
        }
        return buffer.toString();
    }
    /**
     * Get the log representation of the polynomial.
     * @returns The log representation of the polynomial.
     */
    toLogString() {
        let buffer = "";
        for (let i = 0; i < this.getLength(); i++) {
            if (i > 0) {
                buffer += ",";
            }
            buffer += mathHelper_1.MathHelper.glog(this.getAt(i));
        }
        return buffer.toString();
    }
    /**
     * Multiply the polynomial with another one.
     * @param e The polynomial to multiply.
     * @returns The multiplication of the polynomials.
     */
    multiply(e) {
        const num = [];
        const len = this.getLength() + e.getLength() - 1;
        for (let i = 0; i < len; i++) {
            num.push(0);
        }
        for (let i = 0; i < this.getLength(); i++) {
            for (let j = 0; j < e.getLength(); j++) {
                num[i + j] ^= mathHelper_1.MathHelper.gexp(mathHelper_1.MathHelper.glog(this.getAt(i)) +
                    mathHelper_1.MathHelper.glog(e.getAt(j)));
            }
        }
        return new Polynomial(num);
    }
    /**
     * Get the modulus of the polynomial from another.
     * @param e The polynomial.
     * @returns The modules of the polynomials.
     */
    mod(e) {
        if (this.getLength() - e.getLength() < 0) {
            return this;
        }
        const ratio = mathHelper_1.MathHelper.glog(this.getAt(0)) - mathHelper_1.MathHelper.glog(e.getAt(0));
        // create copy
        const num = [];
        for (let i = 0; i < this.getLength(); i++) {
            num.push(this.getAt(i));
        }
        // subtract and calc rest.
        for (let i = 0; i < e.getLength(); i++) {
            num[i] ^= mathHelper_1.MathHelper.gexp(mathHelper_1.MathHelper.glog(e.getAt(i)) + ratio);
        }
        // call recursively
        return new Polynomial(num).mod(e);
    }
}
exports.Polynomial = Polynomial;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seW5vbWlhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL3BvbHlub21pYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZDQUEwQztBQUUxQzs7O0dBR0c7QUFDSDtJQUlJOzs7O09BSUc7SUFDSCxZQUFZLEdBQWEsRUFBRSxRQUFnQixDQUFDO1FBQ3hDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVmLE9BQU8sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QyxNQUFNLEVBQUUsQ0FBQztTQUNaO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQztRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEtBQUssQ0FBQyxLQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxJQUFJLE1B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
Object.defineProperty(exports, "__esModule", { value: true });
const qrDataMode_1 = require("./qrDataMode");
/**
 * Base class for storing QR Data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
class QRDataBase {
    /**
     * Create a new instance of QRDataBase.
     * @param mode The mode for the data.
     * @param data The data.
     */
    constructor(mode, data) {
        this._mode = mode;
        this._data = data;
    }
    /**
     * Get the data mode.
     * @returns The data mode.
     */
    getMode() {
        return this._mode;
    }
    /**
     * Get the data for the qr.
     * @returns The data.
     */
    getData() {
        return this._data;
    }
    /**
     * Get the length in bits of the data.
     * @param typeNumber The type number to get the length for.
     * @returns The length in bits.
     */
    getLengthInBits(typeNumber) {
        if (typeNumber >= 1 && typeNumber < 10) {
            switch (this._mode) {
                case qrDataMode_1.QRDataMode.number: return 10;
                case qrDataMode_1.QRDataMode.alphaNumeric: return 9;
                case qrDataMode_1.QRDataMode.byte8: return 8;
                default:
                    throw new Error(`Invalid mode ${this._mode}`);
            }
        }
        else if (typeNumber < 27) {
            switch (this._mode) {
                case qrDataMode_1.QRDataMode.number: return 12;
                case qrDataMode_1.QRDataMode.alphaNumeric: return 11;
                case qrDataMode_1.QRDataMode.byte8: return 16;
                default:
                    throw new Error(`Invalid mode ${this._mode}`);
            }
        }
        else if (typeNumber < 41) {
            switch (this._mode) {
                case qrDataMode_1.QRDataMode.number: return 14;
                case qrDataMode_1.QRDataMode.alphaNumeric: return 13;
                case qrDataMode_1.QRDataMode.byte8: return 16;
                default:
                    throw new Error(`Invalid mode ${this._mode}`);
            }
        }
        else {
            throw new Error(`Invalid typeNumber ${typeNumber}`);
        }
    }
}
exports.QRDataBase = QRDataBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXJEYXRhQmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvcXJEYXRhQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNkNBQTBDO0FBRTFDOzs7R0FHRztBQUNILE1BQXNCLFVBQVU7SUFNNUI7Ozs7T0FJRztJQUNILFlBQVksSUFBZ0IsRUFBRSxJQUFZO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFjRDs7OztPQUlHO0lBQ0ksZUFBZSxDQUFDLFVBQWtCO1FBQ3JDLElBQUksVUFBVSxJQUFJLENBQUMsSUFBSSxVQUFVLEdBQUcsRUFBRSxFQUFFO1lBQ3BDLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDaEIsS0FBSyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNsQyxLQUFLLHVCQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUssdUJBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEM7b0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDckQ7U0FDSjthQUFNLElBQUksVUFBVSxHQUFHLEVBQUUsRUFBRTtZQUN4QixRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hCLEtBQUssdUJBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbEMsS0FBSyx1QkFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN4QyxLQUFLLHVCQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2pDO29CQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ3JEO1NBQ0o7YUFBTSxJQUFJLFVBQVUsR0FBRyxFQUFFLEVBQUU7WUFDeEIsUUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNoQixLQUFLLHVCQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2xDLEtBQUssdUJBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDeEMsS0FBSyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNqQztvQkFDSSxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUNyRDtTQUNKO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0wsQ0FBQztDQUNKO0FBOUVELGdDQThFQyJ9
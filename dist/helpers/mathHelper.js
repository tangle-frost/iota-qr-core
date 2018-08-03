Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class to helper with math.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
class MathHelper {
    /**
     * Initialize the math helper.
     */
    static initialize() {
        if (!MathHelper.EXP_TABLE) {
            MathHelper.EXP_TABLE = [];
            MathHelper.LOG_TABLE = [];
            for (let i = 0; i < 256; i++) {
                MathHelper.EXP_TABLE.push(i < 8 ? 1 << i :
                    MathHelper.EXP_TABLE[i - 4] ^
                        MathHelper.EXP_TABLE[i - 5] ^
                        MathHelper.EXP_TABLE[i - 6] ^
                        MathHelper.EXP_TABLE[i - 8]);
                MathHelper.LOG_TABLE.push(0);
            }
            for (let i = 0; i < 255; i++) {
                MathHelper.LOG_TABLE[MathHelper.EXP_TABLE[i]] = i;
            }
        }
    }
    /**
     * Get the log of the value.
     * @param value The value to get the log of.
     * @returns the log of the value.
     */
    static glog(value) {
        if (value < 1) {
            throw new Error(`log(' + ${value} + ')'`);
        }
        return MathHelper.LOG_TABLE[value];
    }
    /**
     * Get the exponent of the value.
     * @param value The value to get the exponent of.
     * @returns The exponent of the value.
     */
    static gexp(value) {
        let localValue = value;
        while (localValue < 0) {
            localValue += 255;
        }
        while (localValue >= 256) {
            localValue -= 255;
        }
        return MathHelper.EXP_TABLE[localValue];
    }
}
exports.MathHelper = MathHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aEhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL21hdGhIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRztBQUNILE1BQWEsVUFBVTtJQU1uQjs7T0FFRztJQUNJLE1BQU0sQ0FBQyxVQUFVO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQzFCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFCLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDdEMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUMzQixVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzNCLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDM0IsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEM7WUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMxQixVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDckQ7U0FDSjtJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFhO1FBQzVCLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLFFBQVEsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFhO1FBQzVCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN2QixPQUFPLFVBQVUsR0FBRyxDQUFDLEVBQUU7WUFDbkIsVUFBVSxJQUFJLEdBQUcsQ0FBQztTQUNyQjtRQUNELE9BQU8sVUFBVSxJQUFJLEdBQUcsRUFBRTtZQUN0QixVQUFVLElBQUksR0FBRyxDQUFDO1NBQ3JCO1FBQ0QsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDSjtBQXRERCxnQ0FzREMifQ==
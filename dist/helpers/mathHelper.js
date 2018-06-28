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
        while (value < 0) {
            localValue += 255;
        }
        while (value >= 256) {
            localValue -= 255;
        }
        return MathHelper.EXP_TABLE[localValue];
    }
}
exports.MathHelper = MathHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aEhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL21hdGhIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRztBQUNIO0lBTUk7O09BRUc7SUFDSSxNQUFNLENBQUMsVUFBVTtRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUN2QixVQUFVLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUMxQixVQUFVLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMxQixVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3RDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDM0IsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUMzQixVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzNCLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hDO1lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUIsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3JEO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBYTtRQUM1QixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQztTQUM3QztRQUNELE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBYTtRQUM1QixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDdkIsT0FBTyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2QsVUFBVSxJQUFJLEdBQUcsQ0FBQztTQUNyQjtRQUNELE9BQU8sS0FBSyxJQUFJLEdBQUcsRUFBRTtZQUNqQixVQUFVLElBQUksR0FBRyxDQUFDO1NBQ3JCO1FBQ0QsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDSjtBQXRERCxnQ0FzREMifQ==
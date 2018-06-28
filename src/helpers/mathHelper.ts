/**
 * Class to helper with math.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export class MathHelper {
    /* @internal */
    private static EXP_TABLE: number[];
    /* @internal */
    private static LOG_TABLE: number[];

    /**
     * Initialize the math helper.
     */
    public static initialize(): void {
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
    public static glog(value: number): number {
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
    public static gexp(value: number): number {
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

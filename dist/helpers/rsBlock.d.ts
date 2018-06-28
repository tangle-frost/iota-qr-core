import { ErrorCorrectLevel } from "../models/errorCorrectLevel";
/**
 * Class to represent a RS Block.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */
export declare class RSBlock {
    private readonly _totalCount;
    private readonly _dataCount;
    /**
     * Create a new insstance of RSBlock.
     * @param totalCount The total count for the block.
     * @param dataCount The data count for the block.
     */
    constructor(totalCount: number, dataCount: number);
    /**
     * Get RS Blocks for the type number and error correct level.
     * @param typeNumber The type number.
     * @param errorCorrectLevel The error correct level.
     * @returns The RS Blocks.
     */
    static getRSBlocks(typeNumber: number, errorCorrectLevel: ErrorCorrectLevel): RSBlock[];
    /**
     * Get the data count.
     * @returns The data count.
     */
    getDataCount(): number;
    /**
     * Get the total count.
     * @returns The total count.
     */
    getTotalCount(): number;
}

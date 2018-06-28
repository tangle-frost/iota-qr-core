/**
 * Tests for QR.
 */
import * as chai from "chai";
import { QR } from "../src/qr";

describe("QR", () => {
    it("can be created", () => {
        const obj = new QR();
        chai.should().exist(obj);
    });
});

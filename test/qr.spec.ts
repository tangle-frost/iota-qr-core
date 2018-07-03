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

    describe("generate", () => {
        it("can generate data", () => {
            const obj = new QR();
            obj.addText("This is a test");
            const data = obj.generate();
            chai.should().exist(data);
        });
    });
});

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
            obj.addData("https://www.iota.org");
            const data = obj.generate();
            let text = `<svg width="${data.length * 10 + 100}" height="${data.length * 10 + 100}" xmlns="http://www.w3.org/2000/svg">\n`;
            for (let x = 0; x < data.length; x++) {
                for (let y = 0; y < data[x].length; y++) {
                    if (data[x][y]) {
                        text += `<rect x="${x * 10 + 50}" y="${y * 10 + 50}" width="10" height="10" style="fill:rgb(0,0,0)" />\n`;
                    }
                }
                text += "\n";
            }
            text += "</svg>";
            // tslint:disable-next-line:no-console
            console.log(text);
            chai.should().exist(obj);
        });
    });
});

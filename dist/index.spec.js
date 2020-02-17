"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bip39_ts_1 = require("bip39-ts");
describe("gen_phrase", () => {
    it("gen_phrase", () => {
        let phrase = bip39_ts_1.getMnemonic();
        expect(phrase.split(" ").length).toBe(12);
    });
});

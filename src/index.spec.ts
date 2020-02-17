// import { new_mnemophrase } from "ed25519-sigs-js";
import { getMnemonic } from "bip39-ts";

describe("gen_phrase", () => {
  it("gen_phrase", () => {
    let phrase: string = getMnemonic();
    expect(phrase.split(" ").length).toBe(12);
  });
});

describe("gen_phrase", () => {
  it("gen_phrase", () => {
    let mnemo = Mnemonic.new_random();
    expect(mnemo.phrase.split(" ").length).toBe(12);
  });
});

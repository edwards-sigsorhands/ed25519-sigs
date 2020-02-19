import { getMnemonic } from "bip39-ts";
// import { gen_privKey, seed_from_phrase } from ".";

describe("gen_phrase", () => {
  it("gen_phrase", () => {
    let phrase: string = getMnemonic();
    expect(phrase.split(" ").length).toBe(12);
  });
});

// describe("gen_privKey", () => {
//   it("gen_privKey", () => {
//     let phrase =
//       "famous concert update chimney vicious repeat camp awful equal cash leisure stable";
//     let seed = seed_from_phrase(phrase);
//     let privKey = gen_privKey(seed);

//     // prettier-ignore
//     expect(privKey).toEqual(
//       Uint8Array.from([
//         136,  43, 140, 164,  87,   8, 104,  39, 242, 182,  44,
//         253, 236, 253, 115,  28, 152,  43,  56,  73,  78,  26,
//           8, 248, 146,   1,  64,  92,  38, 169,  53, 217,  77,
//         255,   1,  87,  32, 102,  70, 203,  73, 206, 134, 120,
//         196, 243,  98, 188, 113,  87,  70, 251,   0,  89,  80,
//          68, 155, 200, 146,  57, 221, 152,  21, 113
//       ])
//     );
//   });
// });

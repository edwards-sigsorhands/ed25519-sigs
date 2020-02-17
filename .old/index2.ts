import lib25519, {
  gen_pubKey,
  gen_privKey,
  new_mnemophrase,
  seed_from_phrase
} from "ed25519-sigs";

export class KeyPair {
  privKey: Uint8Array;
  pubKey: Uint8Array;
  constructor(privKey: Uint8Array, pubKey: Uint8Array) {
    this.privKey = privKey;
    this.pubKey = pubKey;
  }

  from_phrase(mnemoPhrase: string): KeyPair {
    let seed = seed_from_phrase(mnemoPhrase);
    let privKey = gen_privKey(seed);
    let pubKey = gen_pubKey(seed);
    return new KeyPair(privKey, pubKey);
  }

  // sign returns the signature only
  sign(message: Uint8Array): Uint8Array {
    return lib25519.sign(message, this.privKey);
  }

  verify(message: Uint8Array, signature: Uint8Array): boolean {
    return lib25519.verify(message, this.pubKey, signature);
  }
}

export function verify(
  message: Uint8Array,
  pubKey: Uint8Array,
  signature: Uint8Array
) {
  return lib25519.verify(message, pubKey, signature);
}

export class Mnemonic {
  phrase: string;
  constructor(phrase: string) {
    this.phrase = phrase;
  }

  new_random(): Mnemonic {
    return new Mnemonic(new_mnemophrase());
  }

  into_seed(): Uint8Array {
    return seed_from_phrase(this.phrase);
  }
}

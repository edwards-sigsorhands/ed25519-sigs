declare module "bip39-ts";
export {
  gen_keypair,
  pubKey_from_pair_bytes,
  sign,
  verify,
  seed_from_phrase
} from "ed25519-sigs-js";

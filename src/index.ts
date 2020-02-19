export {
  gen_keypair as random_new_keypair,
  pubKey_from_pair_bytes as new_pubKey,
  sign as signature,
  verify as verification,
  seed_from_phrase as mnemonic_phrase_to_entropy
} from "ed25519-sigs-js";

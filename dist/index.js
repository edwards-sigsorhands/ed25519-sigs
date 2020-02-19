"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ed25519_sigs_js_1 = require("ed25519-sigs-js");
exports.random_new_keypair = ed25519_sigs_js_1.gen_keypair;
exports.new_pubkey = ed25519_sigs_js_1.pubKey_from_pair_bytes;
exports.signature = ed25519_sigs_js_1.sign;
exports.verification = ed25519_sigs_js_1.verify;
exports.mnemonic_phrase_to_entropy = ed25519_sigs_js_1.seed_from_phrase;

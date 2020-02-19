"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ed25519_sigs_js_1 = require("ed25519-sigs-js");
exports.gen_keypair = ed25519_sigs_js_1.gen_keypair;
exports.pubKey_from_pair_bytes = ed25519_sigs_js_1.pubKey_from_pair_bytes;
exports.sign = ed25519_sigs_js_1.sign;
exports.verify = ed25519_sigs_js_1.verify;
exports.seed_from_phrase = ed25519_sigs_js_1.seed_from_phrase;

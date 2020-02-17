"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ed25519_sigs_1 = require("ed25519-sigs");
exports.gen_pubKey = ed25519_sigs_1.gen_pubKey;
exports.gen_privKey = ed25519_sigs_1.gen_privKey;
exports.sign = ed25519_sigs_1.sign;
exports.verify = ed25519_sigs_1.verify;
exports.new_mnemophrase = ed25519_sigs_1.new_mnemophrase;
exports.seed_from_phrase = ed25519_sigs_1.seed_from_phrase;

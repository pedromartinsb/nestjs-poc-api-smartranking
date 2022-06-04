"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadorSchema = void 0;
const mongoose = require("mongoose");
exports.JogadorSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    telefoneCelular: { type: String },
    nome: String,
    ranking: String,
    posicaoRanking: Number,
    urlFotoJogador: String,
}, { timestamps: true, collection: 'jogadores' });
//# sourceMappingURL=jogador.schema.js.map
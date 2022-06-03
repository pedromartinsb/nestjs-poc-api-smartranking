import { Document } from 'mongoose';
export declare class Jogador extends Document {
    readonly telefoneCelular: string;
    readonly email: string;
    nome: string;
    ranking: string;
    posicaoRanking: number;
    urlFotoJogador: string;
}

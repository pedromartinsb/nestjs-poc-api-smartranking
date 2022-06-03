import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { Model } from 'mongoose';
export declare class JogadoresService {
    private readonly jogadorModel;
    private readonly logger;
    constructor(jogadorModel: Model<Jogador>);
    criarAtualizarJogador(criarJogadorDto: CriarJogadorDto): Promise<void>;
    consultarJogadores(): Promise<Jogador[]>;
    consultarJogadorPeloEmail(email: string): Promise<Jogador>;
    deletarJogador(email: string): Promise<any>;
    private atualizar;
    private criar;
}

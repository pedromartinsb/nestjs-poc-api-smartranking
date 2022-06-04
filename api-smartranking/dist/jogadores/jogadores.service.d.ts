import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { Model } from 'mongoose';
import { AtualizarJogadorDto } from './dtos/atualizar-jogador.dto';
export declare class JogadoresService {
    private readonly jogadorModel;
    private readonly logger;
    constructor(jogadorModel: Model<Jogador>);
    criarJogador(criarJogadorDto: CriarJogadorDto): Promise<Jogador>;
    atualizarJogador(_id: string, atualizarJogadorDto: AtualizarJogadorDto): Promise<void>;
    consultarJogadores(): Promise<Jogador[]>;
    consultarJogadorPorId(_id: string): Promise<Jogador>;
    deletarJogador(_id: string): Promise<any>;
}

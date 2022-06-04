import { Jogador } from './interfaces/jogador.interface';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
import { AtualizarJogadorDto } from './dtos/atualizar-jogador.dto';
export declare class JogadoresController {
    private readonly jogadoresService;
    constructor(jogadoresService: JogadoresService);
    criarJogador(criarJogadorDto: CriarJogadorDto): Promise<Jogador>;
    atualizarJogador(atualizarJogadorDto: AtualizarJogadorDto, _id: string): Promise<void>;
    consultarJogadores(): Promise<Jogador[]>;
    consultarJogadoresPorId(_id: string): Promise<Jogador>;
    deletarJogador(_id: string): Promise<void>;
}

import { Jogador } from './interfaces/jogador.interface';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
export declare class JogadoresController {
    private readonly jogadoresService;
    constructor(jogadoresService: JogadoresService);
    criarAtualizarJogador(criarJogadorDto: CriarJogadorDto): Promise<void>;
    consultarJogadores(email: string): Promise<Jogador[] | Jogador>;
    deletarJogador(email: string): Promise<void>;
}

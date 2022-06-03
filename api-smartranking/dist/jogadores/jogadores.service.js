"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var JogadoresService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadoresService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let JogadoresService = JogadoresService_1 = class JogadoresService {
    constructor(jogadorModel) {
        this.jogadorModel = jogadorModel;
        this.logger = new common_1.Logger(JogadoresService_1.name);
    }
    async criarAtualizarJogador(criarJogadorDto) {
        const { email } = criarJogadorDto;
        const jogadorEncontrado = await this.jogadorModel.findOne({ email }).exec();
        if (jogadorEncontrado) {
            await this.atualizar(criarJogadorDto);
        }
        else {
            await this.criar(criarJogadorDto);
        }
    }
    async consultarJogadores() {
        return await this.jogadorModel.find().exec();
    }
    async consultarJogadorPeloEmail(email) {
        const jogadorEncontrado = await this.jogadorModel.findOne({ email }).exec();
        if (!jogadorEncontrado) {
            throw new common_1.NotFoundException(`Jogador com email ${email} não encontrado`);
        }
        return jogadorEncontrado;
    }
    async deletarJogador(email) {
        return await this.jogadorModel.remove(email).exec();
    }
    async atualizar(criarJogadorDto) {
        return await this.jogadorModel
            .findOneAndUpdate({ email: criarJogadorDto.email }, { $set: criarJogadorDto })
            .exec();
    }
    async criar(criarJogadorDto) {
        const jogadorCriado = new this.jogadorModel(criarJogadorDto);
        return jogadorCriado.save();
    }
};
JogadoresService = JogadoresService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Jogador')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], JogadoresService);
exports.JogadoresService = JogadoresService;
//# sourceMappingURL=jogadores.service.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadoresValidacaoParametros = void 0;
const common_1 = require("@nestjs/common");
class JogadoresValidacaoParametros {
    transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException(`O valor do parâmetro ${metadata.type} deve ser informado`);
        }
        return value;
    }
}
exports.JogadoresValidacaoParametros = JogadoresValidacaoParametros;
//# sourceMappingURL=jogadores-validacao-parametros.pipe.js.map
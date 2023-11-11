"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subtracao = void 0;
class Subtracao {
    execute(n1, n2) {
        if (n1 >= n2) {
            return n1 - n2;
        }
        else {
            return (n2 - n1);
        }
    }
}
exports.Subtracao = Subtracao;

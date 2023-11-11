"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divisao = void 0;
class Divisao {
    execute(n1, n2) {
        if (n1 >= n2) {
            return n1 / n2;
        }
        else {
            return (n2 / n1);
        }
    }
}
exports.Divisao = Divisao;

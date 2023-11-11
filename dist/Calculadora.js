"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    constructor(n1, n2, operacao) {
        this.numeroUm = n1;
        this.numeroDois = n2;
        this.operacao = operacao;
        this.resultado = 0;
    }
    getNumeroUm() {
        return this.numeroUm;
    }
    setNumeroUm(number) {
        this.numeroUm = number;
    }
    getNumeroDois() {
        return this.numeroDois;
    }
    setNumeroDois(number) {
        this.numeroDois = number;
    }
    execute() {
        return this.resultado = this.operacao.execute(this.numeroUm, this.numeroDois);
    }
    twistStrategy(operacao) {
        this.operacao = operacao;
    }
}
exports.Calculadora = Calculadora;

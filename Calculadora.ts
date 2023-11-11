import { IStrategy } from "./IStrategy";

export class Calculadora implements IStrategy {
    private numeroUm: number;
    private numeroDois: number;
    private resultado: number;
    private operacao: IStrategy;

    constructor(n1: number, n2: number, operacao: IStrategy){
        this.numeroUm = n1;
        this.numeroDois = n2;
        this.operacao = operacao;
        this.resultado = 0;
    }

    public getNumeroUm():number {
        return this.numeroUm;
    }

    public setNumeroUm(number: number): void {
        this.numeroUm = number;
    }

    public getNumeroDois():number {
        return this.numeroDois;
    }

    public setNumeroDois(number: number): void {
        this.numeroDois = number;
    }

    execute():number {
        return this.resultado = this.operacao.execute(this.numeroUm, this.numeroDois);
    }

    public twistStrategy(operacao: IStrategy): void{
        this.operacao = operacao;
    }
}
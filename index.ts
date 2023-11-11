import { IStrategy } from "./IStrategy";
import { Calculadora } from "./Calculadora";
import { Soma } from "./Soma";
import { Subtracao } from "./Subtracao";
import { Multiplicacao } from "./Multiplicacao";
import { Divisao } from "./Divisao";
import promptSync from 'prompt-sync';

const prompt = promptSync();
prompt(require('prompt-sync'))

const soma: IStrategy = new Soma();
const subtracao: IStrategy = new Subtracao();
const multiplicacao: IStrategy = new Multiplicacao();
const divisao: IStrategy = new Divisao();

const calculadora: Calculadora = new Calculadora(0, 0, soma);
let inicio = "0";

//while (inicio === "0") 
do {
    console.clear(); //limpar o console

    //solicitando os dados de entrada
    let numeroUm = parseInt(prompt("Digite o primeiro número: "));
    let numeroDois = parseInt(prompt("Digite o segundo número: "));

    //usando o método set para add os dados
    calculadora.setNumeroUm(numeroUm);
    calculadora.setNumeroDois(numeroDois);

    //solicitando a operação que deve ser realizada
    console.log("\nQual operação matemática você deseja realizar?")
    console.log("1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão")
    let operacao = Number(prompt(">"));

    //switch...case para definir a op escolhida pelo usuário
    switch (operacao) {
        case 1:
            calculadora.twistStrategy(soma);
            console.log(`\n${calculadora.getNumeroUm()} + ${calculadora.getNumeroDois()} = ${calculadora.execute()}`)
            break
        case 2:
            calculadora.twistStrategy(subtracao);
            console.log(`\n${calculadora.getNumeroUm()} - ${calculadora.getNumeroDois()} = ${calculadora.execute()}`)
            break
        case 3:
            calculadora.twistStrategy(multiplicacao);
            console.log(`\n${calculadora.getNumeroUm()} * ${calculadora.getNumeroDois()} = ${calculadora.execute()}`)
            break
        case 4:
            calculadora.twistStrategy(divisao);
            try {
                console.log(`\n${calculadora.getNumeroUm()} / ${calculadora.getNumeroDois()} = ${calculadora.execute()}`)
            } catch (error) {
                console.log(error)
            } finally {
                break;
            }       
        default:
            console.log('Escolha uma opção válida!')
    }
    //console.log(calculadora.twistStrategy)
    console.log("\nDigite - 0 - se ainda deseja continuar: ");
    inicio = prompt(">");

} while (inicio === "0")

    



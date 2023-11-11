import { IStrategy } from "./IStrategy";

export class Multiplicacao implements IStrategy {

    execute(n1: number, n2: number): number {
        return (n2*n1);    
    }
}
import { IStrategy } from "./IStrategy";

export class Divisao implements IStrategy {

    execute(n1: number, n2: number): number {
        if (n1 >= n2){
            return n1/n2;
        } else {
            return (n2/n1);
        }      
    }
}
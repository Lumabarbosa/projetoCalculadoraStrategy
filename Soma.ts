import { IStrategy } from './IStrategy';

export class Soma implements IStrategy {

    execute(n1: number, n2: number): number {
        return (n1+n2);
    }
}
import { Produto } from "./produto ";

export class Usuario {
    produtos: Array<Produto> = [];
    public idadeInicial = ''
    constructor(public nome: string, public idade: number, public cpf: string) {
        this.idade = idade;
    }
}
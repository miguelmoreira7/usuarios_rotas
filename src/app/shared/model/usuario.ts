import { Produto } from "./produto ";

export class Usuario {
    public idadeInicial = ''
    public id = 0
    constructor(public nome: string, public idade: number, public cpf: string) {
        this.idade = idade;
    }
}
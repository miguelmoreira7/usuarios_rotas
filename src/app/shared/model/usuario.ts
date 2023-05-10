export class Usuario {

    public idadeInicial = ''
    constructor(public nome: string, public idade: number, public cpf: string) {
        this.idade = idade;
    }
}
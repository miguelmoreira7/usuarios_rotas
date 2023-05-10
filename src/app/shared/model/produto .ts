export class Produto {
    valorExibicao = ''
    constructor (public nomeProduto: string, public preco: number) {
        this.preco = preco;
    }
}
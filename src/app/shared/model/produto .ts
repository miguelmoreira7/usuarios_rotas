export class Produto {
    valorExibicao = ''
    imagemProduto = ''
    constructor (public id: number, public nomeProduto: string, public preco: number) {
        this.preco = preco;
    }
}
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/shared/model/produto ';
import { PRODUTOS } from 'src/app/shared/model/produtos';

@Component({
  selector: 'app-edicao-einsercao-produtos',
  templateUrl: './edicao-einsercao-produtos.component.html',
  styleUrls: ['./edicao-einsercao-produtos.component.css']
})
export class EdicaoEInsercaoProdutosComponent {
  produtoManutencao: Produto;
  produtos = PRODUTOS;
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.produtoManutencao = new Produto(0, '', 0);
    const idEdicao = rotaAtual.snapshot.paramMap.get('id');
    if (idEdicao) {
      const produtoEncontrado = this.produtos.find(produto => String(produto.id) === idEdicao);
      if (produtoEncontrado) {
        this.produtoManutencao = produtoEncontrado;
      }
    }
  }
  salvar() {
    this.produtoManutencao = new Produto(0, '', 0);
    this.roteador.navigate(['listagemprodutos'])
  }

}

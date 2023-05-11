import { Component } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto ';
import { PRODUTOS } from 'src/app/shared/model/produtos';
import { Usuario } from 'src/app/shared/model/usuario';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.css']
})

export class ListagemProdutosComponent {
  produtos = PRODUTOS;
  excluir(produtoRemover: Produto): void{
    const indx = this.produtos.findIndex(produto => produto.id === produtoRemover.id);
    this.produtos.splice(indx, 1);
  }
}

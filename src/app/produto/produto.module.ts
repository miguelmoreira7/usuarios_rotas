import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsModule } from '../imports/imports.module';
import { ListagemProdutosComponent } from './listagem-produtos/listagem-produtos.component';
import { EdicaoEInsercaoProdutosComponent } from './edicao-einsercao-produtos/edicao-einsercao-produtos.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    ListagemProdutosComponent,
    EdicaoEInsercaoProdutosComponent
  ],
  imports: [
    CommonModule,
    ImportsModule,
    RouterLink
  ],
  exports: [
    ListagemProdutosComponent,
    EdicaoEInsercaoProdutosComponent
  ]
})
export class ProdutoModule { }

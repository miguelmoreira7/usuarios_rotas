import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantemUsuarioComponent } from './usuario/mantem-usuario/mantem-usuario.component';
import { ListagemUsuariosComponent } from './usuario/listagem-usuarios/listagem-usuarios.component';
import { ListagemProdutosComponent } from './produto/listagem-produtos/listagem-produtos.component';
import { EdicaoEInsercaoProdutosComponent } from './produto/edicao-einsercao-produtos/edicao-einsercao-produtos.component'

const routes: Routes = [
  {
    path: 'cadastrousuario',
    component: MantemUsuarioComponent
  },
  {
    path: 'editarusuario/:id',
    component: MantemUsuarioComponent
  },
  {
    path: 'listagemusuarios',
    component: ListagemUsuariosComponent
  },
  {
    path: 'listagemusuarios/:cpf',
    component: ListagemUsuariosComponent
  },
  {
    path: 'listagemprodutos',
    component: ListagemProdutosComponent
  },
  {
    path: 'editarproduto/:id',
    component: EdicaoEInsercaoProdutosComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantemUsuarioComponent } from './usuario/mantem-usuario/mantem-usuario.component';
import { ListagemUsuariosComponent } from './usuario/listagem-usuarios/listagem-usuarios.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

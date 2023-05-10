import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemUsuariosComponent } from './listagem-usuarios/listagem-usuarios.component';
import { MantemUsuarioComponent } from './mantem-usuario/mantem-usuario.component';
import { PipesModule } from '../pipes/pipes.module';
import { RouterLink } from '@angular/router';
import { ImportsModule } from '../imports/imports.module';

@NgModule({
  declarations: [
    ListagemUsuariosComponent,
    MantemUsuarioComponent
  ],
  imports: [
    CommonModule,
    ImportsModule,
    PipesModule,
    RouterLink,
  ],
  exports: [
    ListagemUsuariosComponent,
    MantemUsuarioComponent
  ]
})
export class UsuarioModule { }

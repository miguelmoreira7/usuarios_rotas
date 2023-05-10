import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemUsuariosComponent } from './listagem-usuarios/listagem-usuarios.component';
import { MantemUsuarioComponent } from './mantem-usuario/mantem-usuario.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { FlexModule } from '@angular/flex-layout';
import { PipesModule } from '../pipes/pipes.module';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    ListagemUsuariosComponent,
    MantemUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    PipesModule,
    RouterLink,
    FlexModule
  ],
  exports: [
    ListagemUsuariosComponent,
    MantemUsuarioComponent
  ]
})
export class UsuarioModule { }

import { Component } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';
import { USUARIOS } from 'src/app/shared/model/usuarios';

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.css']
})

export class ListagemUsuariosComponent {
  usuarios = USUARIOS;
  excluir (usuarioARemover: Usuario):void {
    const indx = this.usuarios.findIndex(usuario => usuario.cpf === usuarioARemover.cpf);
    this.usuarios.splice(indx, 1);
  }
}

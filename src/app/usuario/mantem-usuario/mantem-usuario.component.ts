import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/usuario';
import { USUARIOS } from 'src/app/shared/model/usuarios';

@Component({
  selector: 'app-mantem-usuario',
  templateUrl: './mantem-usuario.component.html',
  styleUrls: ['./mantem-usuario.component.css']
})
export class MantemUsuarioComponent {

  usuarioDeManutencao: Usuario;
  estaCadastrando = true;
  nomeBotaoManutencao!: String;

  usuarios = USUARIOS;
  constructor (private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.usuarioDeManutencao = new Usuario('',0,'');
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      const usuarioEcontrado = this.usuarios.find(usuario => usuario.cpf === idParaEdicao);
      if (usuarioEcontrado) {
        this.estaCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.usuarioDeManutencao = usuarioEcontrado;
      }
    }
    else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  manter(): void {
    if (this.estaCadastrando && this.usuarioDeManutencao) {
      this.usuarioDeManutencao.idade = Number(this.usuarioDeManutencao.idadeInicial)
      this.usuarios.push(this.usuarioDeManutencao);
    }
    this.usuarioDeManutencao = new Usuario('',0,'');
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemusuarios'])
  }
  camposValidos() {
    return this.usuarioDeManutencao.nome && this.usuarioDeManutencao.idadeInicial &&
           this.usuarioDeManutencao.cpf;
  }

}

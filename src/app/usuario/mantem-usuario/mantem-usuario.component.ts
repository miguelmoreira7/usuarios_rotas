import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './../../shared/services/usuario.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/usuario';

@Component({
  selector: 'app-mantem-usuario',
  templateUrl: './mantem-usuario.component.html',
  styleUrls: ['./mantem-usuario.component.css']
})
export class MantemUsuarioComponent {

  usuarioDeManutencao: Usuario;
  estaCadastrando = true;
  nomeBotaoManutencao!: String;
  url_usuarios = 'http://localhost:3000/usuarios'

  usuarios: Usuario[] = [];
  constructor (private usuarioService: UsuarioService ,private rotaAtual: ActivatedRoute, private roteador: Router) {
    usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    )
    this.usuarioDeManutencao = new Usuario('',0,'');
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      this.usuarioService.buscarPorId(Number(idParaEdicao)).subscribe(usuario => this.usuarioDeManutencao = usuario);
      this.estaCadastrando = false;
      this.nomeBotaoManutencao = 'Salvar';
    }
    else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }
  atualizar() {
    this.usuarioService.editar(this.usuarioDeManutencao).subscribe();
    console.log(this.usuarioDeManutencao);
    this.roteador.navigate(['listagemusuarios']);
  }

  manter(): void {
    if (this.estaCadastrando && this.usuarioDeManutencao) {
      this.usuarioDeManutencao.idade = Number(this.usuarioDeManutencao.idadeInicial)
      this.usuarioService.inserir(this.usuarioDeManutencao).subscribe();
    }
    this.usuarioDeManutencao = new Usuario('',0,'');
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemusuarios']);
  }
  camposValidos() {
    return this.usuarioDeManutencao.nome && this.usuarioDeManutencao.idadeInicial &&
           this.usuarioDeManutencao.cpf;
  }

}

import { Usuario } from 'src/app/shared/model/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url_usuarios = 'http://localhost:3000/usuarios'

  constructor(private httpClient: HttpClient) {

  }
  listar(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url_usuarios);
  }
  inserir(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.url_usuarios, usuario);
  }
  remover(id: number): Observable<Usuario> {
    return this.httpClient.delete<Usuario>(`${this.url_usuarios}/${id}`);
  }
  buscarPorId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.url_usuarios}/${id}`)
  }
  editar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.url_usuarios}/${usuario.id}`, usuario);
  }
}

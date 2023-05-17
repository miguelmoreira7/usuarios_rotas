import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PipesModule } from './pipes/pipes.module';
import { ProdutoModule } from './produto/produto.module';
import { ImportsModule } from './imports/imports.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImportsModule,
    LayoutModule,
    UsuarioModule,
    PipesModule,
    ProdutoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfPipe } from './cpf/cpf.pipe';
import { ReaisPipe } from './reais/reais.pipe';




@NgModule({
  declarations: [
    CpfPipe,
    ReaisPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CpfPipe,
    ReaisPipe,
  ]
})
export class PipesModule { }

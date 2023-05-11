import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprasComponent } from './compras/compras.component';
import { ImportsModule } from '../imports/imports.module';



@NgModule({
  declarations: [
    ComprasComponent
  ],
  imports: [
    CommonModule,
    ImportsModule
  ]
})
export class ComprasModule { }

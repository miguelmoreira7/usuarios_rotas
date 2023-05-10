import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsModule } from 'src/app/imports/imports.module';

import { RouterLink } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ImportsModule
  ],
  exports: [
    MenuComponent
  ]
})
export class LayoutModule { }

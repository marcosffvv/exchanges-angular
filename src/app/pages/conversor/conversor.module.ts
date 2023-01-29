import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorRoutingModule } from './conversor-routing.module';
import { ConversorComponent } from './conversor.component';


@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    CommonModule,
    ConversorRoutingModule,
    FormsModule
  ]
})
export class ConversorModule { }

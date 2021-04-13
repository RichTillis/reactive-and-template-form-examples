import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateDrivenRoutingModule } from './template-driven-routing.module';
import { TemplateDrivenComponent } from './template-driven.component';


@NgModule({
  declarations: [
    TemplateDrivenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateDrivenRoutingModule
    ]
})
export class TemplateDrivenModule { }

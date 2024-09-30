import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyTaskRoutingModule } from './body-task-routing.module';
import { BodyComponent } from './body/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    BodyTaskRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BodyTaskModule { }

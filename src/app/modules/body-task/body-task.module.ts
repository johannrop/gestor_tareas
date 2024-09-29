import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyTaskRoutingModule } from './body-task-routing.module';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    BodyTaskRoutingModule
  ]
})
export class BodyTaskModule { }

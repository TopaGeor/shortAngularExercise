import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    BasicFormComponent
  ]
})
export class BasicFormModule { }

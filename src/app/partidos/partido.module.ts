import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoListComponent } from './partido-list/partido-list.component';
import { PartidoFormComponent } from './partido-form/partido-form.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PartidoListComponent,
    PartidoFormComponent
  ]
})
export class PartidoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { PartidoListComponent } from './partido-list/partido-list.component';
import { PartidoFormComponent } from './partido-form/partido-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    PartidoListComponent,
    PartidoFormComponent
  ]
})
export class PartidoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PoliticoListComponent } from './politico-list/politico-list.component';
import { PoliticoFormComponent } from './politico-form/politico-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    PoliticoListComponent,
    PoliticoFormComponent
  ]
})
export class PoliticoModule { }

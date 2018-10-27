import { NgModule } from '@angular/core';

import {
  MatToolbarModule, 
  MatButtonModule,
  MatCardModule,
  MatTableModule
} from '@angular/material';


@NgModule({
  imports: [
    MatToolbarModule, 
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ],
  exports:[
    MatToolbarModule, 
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ]
})
export class MaterialComponentsModule { }

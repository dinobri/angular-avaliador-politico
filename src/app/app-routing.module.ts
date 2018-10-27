import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PartidoListComponent } from './partidos/partido-list/partido-list.component';
import { PartidoFormComponent } from './partidos/partido-form/partido-form.component';
import { HomeComponent } from './home/home.component';

const routes:Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'partidos', component: PartidoListComponent},
  {path: 'partido', component: PartidoFormComponent},
  {path: 'partido/:sigla', component: PartidoFormComponent},
  {path: 'politicos', component: PartidoListComponent},
  {path: 'politico/:id', component: PartidoFormComponent},
  {path: 'eleitor', component: PartidoFormComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

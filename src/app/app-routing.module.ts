import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PartidoListComponent } from './partidos/partido-list/partido-list.component';
import { PartidoFormComponent } from './partidos/partido-form/partido-form.component';
import { HomeComponent } from './home/home.component';
import { PoliticoListComponent } from './politicos/politico-list/politico-list.component';
import { PoliticoFormComponent } from './politicos/politico-form/politico-form.component';

const routes:Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'partidos', component: PartidoListComponent},
  {path: 'partido', component: PartidoFormComponent},
  {path: 'partido/:sigla', component: PartidoFormComponent},
  {path: 'politicos', component: PoliticoListComponent},
  {path: 'politico', component: PoliticoFormComponent},
  {path: 'politico/:id', component: PoliticoFormComponent},
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

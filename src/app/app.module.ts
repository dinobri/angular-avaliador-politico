import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PartidoModule } from './partidos/partido.module';
import { PoliticoModule } from './politicos/politico.module';
import { MensagensComponent } from './mensagens/mensagens.component';
import * as $ from 'jquery';
import * as bootstrap from "bootstrap";
import { AvaliacaoEleitorComponent } from './eleitores/avaliacao-eleitor/avaliacao-eleitor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MensagensComponent,
    AvaliacaoEleitorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    PartidoModule,
    PoliticoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PartidoModule } from './partidos/partido.module';
import { PoliticoModule } from './politicos/politico.module';
import { MensagensComponent } from './mensagens/mensagens.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MensagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartidoModule,
    PoliticoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PartidoModule } from './partidos/partido.module';
import { HomeComponent } from './home/home.component';
import { MaterialComponentsModule } from './material-components.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartidoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

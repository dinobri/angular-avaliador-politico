import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Partido } from '../app-model/Partido';
import { PARTIDOS } from '../app-mock/partido-mock';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private partidos: Partido[] = [];
  
  constructor() {
    this.carregarPartidosMock();
  }

  getPartidos(): Observable<Partido[]>{
    return of(this.partidos);
  }

  getPartido(sigla: string): Observable<Partido>{
    return of(this.partidos.find(p => p.getSigla() === sigla));
  }

  adicionarPartido(partido: Partido){
    this.partidos.push(partido);
  }

  private carregarPartidosMock(){
    this.partidos = PARTIDOS;
  }
}

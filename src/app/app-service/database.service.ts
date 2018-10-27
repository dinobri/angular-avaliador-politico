import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Partido } from '../app-model/Partido';
import { PARTIDOS } from '../app-mock/partido-mock';
import { Politico } from '../app-model/Politico';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private partidos: Partido[] = [];
  private politicos: Politico[] = [];
  
  constructor() {
    this.carregarPartidosMock();
  }

  // PARTIDOS
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

  // POLITICOS
  getPoliticos(): Observable<Politico[]>{
    return of(this.politicos);
  }

  getPolitico(id: number): Observable<Politico>{
    return of(this.politicos.find(p => p.id === id));
  }

  adicionarPolitico(politico: Politico){
    this.politicos.push(politico);
  }

  private carregarPoliticosMock(){
    this.partidos = PARTIDOS;
  }
}

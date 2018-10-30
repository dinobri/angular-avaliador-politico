import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Partido } from '../app-model/Partido';
import { Politico } from '../app-model/Politico';
import { PARTIDOS } from '../app-mock/partido-mock';
import { POLITICOS } from '../app-mock/politico-mock';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private partidos: Partido[] = [];
  private politicos: Politico[] = [];
  private proximoIdPolitico = 1;
  private proximoIdMandato = 1;
  
  constructor() {
    this.carregarPoliticosMock();
    this.carregarPartidosMock();
  }

  // PARTIDOS
  getPartidos(): Observable<Partido[]>{
    return of(this.partidos);
  }

  getPartido(sigla: string): Observable<Partido>{
    return of(this.partidos.find(p => p.getSigla() === sigla));
  }

  salvarPartido(partido: Partido){
    if(this.partidos.some(p => p.sigla === partido.sigla))
      return;

    this.partidos.push(partido);
  }

  private carregarPartidosMock(){
    this.partidos = PARTIDOS;
    this.partidos.forEach(p => p.avaliar());
    // console.log(this.partidos);
  }

  // POLITICOS
  getPoliticos(): Observable<Politico[]>{
    return of(this.politicos);
  }

  getPolitico(id: number): Observable<Politico>{
    return of(this.politicos.find(p => p.id === id));
  }

  salvarPolitico(politico: Politico){
    if(politico.id){
      let partido: Partido = this.getPartidoPorPolitico(politico.id);
      partido.politicos = partido.politicos.filter(p => p.id !== politico.id);
      politico.partido.politicos.push(politico);
      return;
    } 
      
    politico.id = this.proximoIdPolitico++;
    politico.partido.adicionarPolitico(politico);
    this.politicos.push(politico);
  }

  private carregarPoliticosMock(){
    this.politicos = POLITICOS;

    this.politicos.forEach(p => {
      p.id = this.proximoIdPolitico++;
      p.mandatos.forEach(m => {
        m.id = this.proximoIdMandato++;
        m.avaliar();
      });

      p.avaliarMandatos();
    });
    // console.log(this.politicos);
    // console.log(this.proximoIdPolitico);
  }

  private getPartidoPorPolitico(idPolitico: number): Partido{
    return this.partidos.find(p => p.politicos.some(pol => pol.id === idPolitico));
  }

  //MANDATO
  getProximoIdMandato(): Observable<number>{
    return of(this.proximoIdMandato++);
  }
}

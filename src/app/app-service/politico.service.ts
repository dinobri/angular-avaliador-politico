import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Politico } from '../app-model/Politico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoliticoService {
  constructor(private databaseService: DatabaseService) { }

  getPartidos(): Observable<Politico[]>{
    return this.databaseService.getPoliticos();
  }

  getPolitico(id: number): Observable<Politico>{
    return this.databaseService.getPolitico(id);
  }

  salvarPolitico(novoPolitico: Politico){
    this.databaseService.salvarPolitico(novoPolitico);
  }

  getProximoIdMandato(): Observable<number>{
    return this.databaseService.getProximoIdMandato();
  }
}
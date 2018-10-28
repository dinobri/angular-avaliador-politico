import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Observable } from 'rxjs';
import { Partido } from '../app-model/Partido';

@Injectable({
  providedIn: 'root'
})
export class PartidoService{
  constructor(private databaseService: DatabaseService) { }

  getPartidos(): Observable<Partido[]>{
    return this.databaseService.getPartidos();
  }

  getPartido(sigla: string): Observable<Partido>{
    return this.databaseService.getPartido(sigla);
  }

  salvarPartido(partido: Partido){
    this.databaseService.salvarPartido(partido);
  }
}

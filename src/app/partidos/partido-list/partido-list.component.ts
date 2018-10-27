import { Component, OnInit } from '@angular/core';

import { Partido } from '../../app-model/Partido';
import { PartidoService } from '../../app-service/partido.service';

@Component({
  selector: 'ap-partido-list',
  templateUrl: './partido-list.component.html',
  styleUrls: ['./partido-list.component.css']
})
export class PartidoListComponent implements OnInit {

  partidos: Partido[] = [];
  colunasTabela: string[] = ['nome'];

  constructor(private partidoService: PartidoService) { }

  ngOnInit() {
    this.getPartidos();
  }

  private getPartidos(){
    this.partidoService.getPartidos()
      .subscribe(partidos => this.partidos = partidos);
  }
}

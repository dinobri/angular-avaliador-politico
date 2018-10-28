import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PoliticoService } from '../../app-service/politico.service';
import { Politico } from '../../app-model/Politico';
import { PartidoService } from '../../app-service/partido.service';
import { Partido } from '../../app-model/Partido';

@Component({
  selector: 'app-politico-form',
  templateUrl: './politico-form.component.html',
  styleUrls: ['./politico-form.component.css']
})
export class PoliticoFormComponent implements OnInit {

  @Input() politico: Politico;
  partidos: Partido[] = [];

  constructor(
    private route: ActivatedRoute,
    private politicoService: PoliticoService,
    private partidoService: PartidoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPolitico();
    this.getPartidos();
  }

  getPolitico(){
    const id = +this.route.snapshot.paramMap.get('id');
    if(id){
      this.politicoService.getPolitico(id)
        .subscribe(politico => this.politico = politico);
    } else {
      this.politico = new Politico('', null);
    }
  }

  private getPartidos(){
    this.partidoService.getPartidos()
      .subscribe(partidos => this.partidos = partidos);
  }

  salvar(){
    this.politicoService.salvarPolitico(this.politico);
    this.voltar();
  }

  voltar(){
    this.location.back();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { PartidoService } from '../../app-service/partido.service';
import { ActivatedRoute } from '@angular/router';
import { Partido } from '../../app-model/Partido';

@Component({
  selector: 'ap-partido-form',
  templateUrl: './partido-form.component.html',
  styleUrls: ['./partido-form.component.css']
})
export class PartidoFormComponent implements OnInit {

  @Input() partido: Partido;

  constructor(
    private route: ActivatedRoute,
    private partidoService: PartidoService, 
    private location: Location
  ) { }

  ngOnInit() {
    this.getPartido();
  }

  getPartido(){
    const sigla = this.route.snapshot.paramMap.get('sigla');
    if(sigla){
      this.partidoService.getPartido(sigla)
        .subscribe(partido => this.partido = partido);
    } else {
      this.partido = new Partido('','');
    }
  }

  salvar(){
    this.partidoService.adicionarPartido(this.partido);
    this.voltar();
  }

  voltar(){
    this.location.back();
  }
}

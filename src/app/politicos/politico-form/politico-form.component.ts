import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PoliticoService } from '../../app-service/politico.service';
import { Politico } from '../../app-model/Politico';
import { PartidoService } from '../../app-service/partido.service';
import { Partido } from '../../app-model/Partido';
import { Mandato, TipoMandato } from '../../app-model/Mandato';
import { MandatoLegislativo } from '../../app-model/MandatoLegislativo';
import { MandatoExecutivo } from '../../app-model/MandatoExecutivo';

@Component({
  selector: 'app-politico-form',
  templateUrl: './politico-form.component.html',
  styleUrls: ['./politico-form.component.css']
})
export class PoliticoFormComponent implements OnInit {

  @Input() politico: Politico;
  partidos: Partido[] = [];
  
  @Input() mandato: Mandato;
  @Input() mandatoTemp: Mandato;
  @Input() mandatoLeg: MandatoLegislativo;
  @Input() mandatoExec: MandatoExecutivo;

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

  novoMandatoExecutivo(){
    this.limparMandatosTemporarios();
    this.mandatoExec =new MandatoExecutivo(0,0,0,0);
    this.abrirModalMandato();
  }

  novoMandatoLegislativo(){
    this.limparMandatosTemporarios();
    this.mandatoLeg =new MandatoLegislativo(0,0,0,0,0);
    this.abrirModalMandato();
  }

  abrirMandato(mandato: Mandato){
    this.limparMandatosTemporarios();
    if(mandato.tipoMandato === TipoMandato.EXECUTIVO)
      this.mandatoExec = Object.assign({}, mandato as MandatoExecutivo);
    else
      this.mandatoLeg = Object.assign({}, mandato as MandatoLegislativo);

    this.abrirModalMandato();
  }

  salvarMandato(){
    let mandato:Mandato = this.mandatoExec || this.mandatoLeg;
    console.log(mandato);

    if(mandato.id){
      let mandatoAnterior = this.politico.mandatos.find(m => m.id === mandato.id);
      let idx = this.politico.mandatos.indexOf(mandatoAnterior);
      this.politico.mandatos[idx] = mandato;
    } else {
      this.politicoService.getProximoIdMandato()
        .subscribe(id => mandato.id = id);
      this.politico.mandatos.push(mandato);
    }


    this.limparMandatosTemporarios();
    this.fecharModalMandato();
  }

  abrirModalMandato(){
      $('#modal-mandato').modal('show');
  }

  fecharModalMandato(){
      $('#modal-mandato').modal('hide');
  }

  private limparMandatosTemporarios(){
    this.mandatoExec = null;
    this.mandatoLeg = null;
  }

}

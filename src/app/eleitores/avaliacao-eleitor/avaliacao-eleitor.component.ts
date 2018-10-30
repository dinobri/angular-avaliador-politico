import { Component, OnInit, Input } from '@angular/core';
import { PartidoService } from '../../app-service/partido.service';
import { PoliticoService } from '../../app-service/politico.service';
import { Partido } from '../../app-model/Partido';
import { Politico } from '../../app-model/Politico';
import { Mandato } from '../../app-model/Mandato';

@Component({
  selector: 'app-avaliacao-eleitor',
  templateUrl: './avaliacao-eleitor.component.html',
  styleUrls: ['./avaliacao-eleitor.component.css']
})
export class AvaliacaoEleitorComponent implements OnInit {

  partidos: Partido[] = [];
  politicos: Politico[] = [];

  @Input() partido: Partido;
  @Input() politico: Politico;
  @Input() mandato: Mandato;
  @Input() cpf: string;
  @Input() avaliacao: number;

  constructor(private partidoService: PartidoService, private politicoService: PoliticoService) { }

  ngOnInit() {
    this.carregarListas();
  }

  aoMudarPartido(){
    this.politico = null;
  }

  aoMudarPolitico(){
    this.mandato = null;
  }

  aoMudarMandato(){
    this.avaliacao = null;
  }

  salvar(){
    this.mandato.incluirAvaliacaoEleitor(this.cpf, this.avaliacao);
    this.politico.avaliarMandatos();
    this.partido.avaliar();

    this.limpar();
  }

  limpar(){
    this.cpf = null;
    this.partido = null;
    this.politico = null;
    this.mandato = null;
    this.avaliacao = null;
  }

  private carregarListas(){
    this.partidoService.getPartidos()
      .subscribe(partidos => this.partidos = partidos);

    this.politicoService.getPoliticos()
      .subscribe(politicos => this.politicos = politicos);
  }

  private carregarMandatos(){

  }
}

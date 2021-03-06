import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PartidoService } from '../../app-service/partido.service';
import { Partido } from '../../app-model/Partido';
import { NgForm } from '@angular/forms';
import { MensagensService } from '../../app-service/mensagens.service';

@Component({
  selector: 'ap-partido-form',
  templateUrl: './partido-form.component.html',
  styleUrls: ['./partido-form.component.css']
})
export class PartidoFormComponent implements OnInit {

  partido: Partido;
  formSubmetido: boolean;


  constructor(
    private route: ActivatedRoute,
    private partidoService: PartidoService, 
    private location: Location,
    private msgService: MensagensService
  ) { }

  ngOnInit() {
    this.formSubmetido = false;
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

  salvar(form: NgForm){
    this.formSubmetido = true;
    
    if(form.valid){
      this.partidoService.salvarPartido(this.partido);
      this.msgService.adicionar('Partido registrado com sucesso.');
      this.voltar();
    } else {
      this.msgService.adicionar('Formulário contém erros de validação.');
    }
  }

  voltar(){
    this.location.back();
  }
}

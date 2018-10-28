import { Component, OnInit } from '@angular/core';
import { MensagensService } from '../app-service/mensagens.service';

@Component({
  selector: 'ap-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

  constructor(public mensagemService: MensagensService) { }

  ngOnInit() {
  }

}

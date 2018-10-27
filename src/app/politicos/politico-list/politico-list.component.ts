import { Component, OnInit } from '@angular/core';
import { PoliticoService } from '../../app-service/politico.service';
import { Politico } from '../../app-model/Politico';

@Component({
  selector: 'app-politico-list',
  templateUrl: './politico-list.component.html',
  styleUrls: ['./politico-list.component.css']
})
export class PoliticoListComponent implements OnInit {

  politicos: Politico[] = [];

  constructor(private politicoService: PoliticoService) { }

  ngOnInit() {
  }

  getPoliticos(){
    this.politicoService.getPartidos()
      .subscribe(politicos => this.politicos = politicos);
  }
}

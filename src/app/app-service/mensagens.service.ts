import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {
  mensagens: string[] = [];
  
  constructor() { }

  adicionar(msg: string){
    this.mensagens.push(msg);
  }

  limpar(){
    this.mensagens = [];
  }
}

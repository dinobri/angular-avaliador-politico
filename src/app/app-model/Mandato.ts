import { AvaliacaoEleitor } from './AvaliacaoEleitor';

const PESO_DENUNCIA: number = 2;
const PESO_ELEITORES: number = 4;

export abstract class Mandato{
    denuncias: number;
    avaliacao: number;
    avaliacaoEleitores: AvaliacaoEleitor[];

    constructor(public anoInicial:number, public anoFinal:number){
        this.avaliacaoEleitores = [];
    }
}
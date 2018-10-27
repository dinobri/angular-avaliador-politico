import { Partido } from './Partido';
import { Mandato } from './Mandato';

const PESO_MANDATO_RECENTE: number = 2;
const PASSO_MANDATO_RECENTE: number = 0.5;

export class Politico{
    id: number;
    avaliacaoGeral: number;
    mandatos: Mandato[];
    partido: Partido

    constructor(private nome: string){}

    getNome(): string{
        return this.nome;
    }

    getAvaliacaoGeral(): number{
        return this.avaliacaoGeral;
    }

    getMandatos(): Mandato[]{
        return this.mandatos;
    }
}
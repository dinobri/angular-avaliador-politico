import { Politico } from './Politico';

export class Partido{
    // id: number;
    avaliacaoGeral: number;
    politicos: Politico[];

    constructor(public nome: string, public sigla: string){
        this.politicos = [];
        this.avaliacaoGeral = 0;
    }

    avaliar(): number{
        // TODO: algoritmo de avaliação
        return this.avaliacaoGeral;
    }

    getNome(): string{
        return this.nome;
    }

    getSigla(): string{
        return this.sigla;
    }

    getAvaliacaoGeral(): number{
        return this.avaliacaoGeral;
    }

    getPoliticos(): Politico[]{
        return ([] as Politico[]).concat(this.politicos);
    }
    
    adicionarPolitico(politico: Politico){
        this.politicos.push(politico);
    }
}
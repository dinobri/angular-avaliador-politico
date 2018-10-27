import { Politico } from './Politico';

export class Partido{
    // id: number;
    private avaliacaoGeral: number;
    private politicos: Politico[];

    constructor(private nome: string, private sigla: string){
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
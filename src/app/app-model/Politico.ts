import { Partido } from './Partido';
import { Mandato } from './Mandato';

const PESO_MANDATO_RECENTE: number = 2;
const PASSO_MANDATO_RECENTE: number = 0.5;

export class Politico {
    id: number;
    avaliacaoGeral: number;
    mandatos: Mandato[] = [];

    constructor(public nome: string, public partido: Partido) {
        if (partido)
            this.partido.adicionarPolitico(this);
    }

    public avaliarMandatos() {
        if (!this.mandatos.length) {
            this.avaliacaoGeral = 0;
            return;
        }
        this.mandatos.sort((a, b) => b.anoInicial - a.anoInicial);
        // this.mandatos.forEach(m => m.avaliar());

        let pesoMandato: number = PESO_MANDATO_RECENTE, somaAvaliacoes: number = 0, somaPesos: number = 0;

        for (let i = 0; i < this.mandatos.length; i++) {
            somaAvaliacoes += this.mandatos[i].avaliacao * pesoMandato;
            somaPesos += pesoMandato;
            if (pesoMandato > 1)
                pesoMandato -= PASSO_MANDATO_RECENTE;
        }

        this.avaliacaoGeral = somaAvaliacoes / somaPesos;
    }

    getNome(): string {
        return this.nome;
    }

    getAvaliacaoGeral(): number {
        return this.avaliacaoGeral;
    }

    getMandatos(): Mandato[] {
        return this.mandatos;
    }
}
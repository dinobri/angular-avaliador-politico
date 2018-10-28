import { AvaliacaoEleitor } from './AvaliacaoEleitor';

const PESO_DENUNCIA: number = 2;
const PESO_ELEITORES: number = 4;

export abstract class Mandato{
    id: number;
    denuncias: number = 0;
    avaliacao: number = 0;
    avaliacoesEleitores: AvaliacaoEleitor[] =[];
    avaliacaoEleitores: number;
    tipoMandato: TipoMandato;

    constructor(public anoInicial:number, public anoFinal:number){
        this.avaliacoesEleitores = [];
    }

    abstract avaliar(): number;

    avaliarDenuncias(): number{
        let avaliacaoDenuncia = this.denuncias * 0.5;
        return avaliacaoDenuncia > PESO_DENUNCIA ? PESO_DENUNCIA : PESO_DENUNCIA - avaliacaoDenuncia;
    }

    contabilizarAvaliacaoEleitores(): number {
		if (this.avaliacoesEleitores.length === 0)
			return 7 / PESO_ELEITORES;

        let avaliacaoEleitores = this.avaliacoesEleitores.reduce((soma, avEleitor) => soma + avEleitor.avaliacao, 0) / this.avaliacoesEleitores.length;
        debugger;
		avaliacaoEleitores *= PESO_ELEITORES;

        this.avaliacaoEleitores = avaliacaoEleitores / 10;
        return this.avaliacaoEleitores;
	}
}

export enum TipoMandato{
    EXECUTIVO = 'Executivo',
    LEGISLATIVO = 'Legislativo'
}
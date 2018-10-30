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

    protected avaliarDenuncias(): number{
        let avaliacaoDenuncia = this.denuncias * 0.5;
        return avaliacaoDenuncia > PESO_DENUNCIA ? PESO_DENUNCIA : PESO_DENUNCIA - avaliacaoDenuncia;
    }

    protected contabilizarAvaliacaoEleitores(): number {
		if (!this.avaliacoesEleitores.length)
			return 7 / PESO_ELEITORES;

        this.avaliacaoEleitores = this.avaliacoesEleitores.reduce((soma, avEleitor) => soma + avEleitor.avaliacao, 0) / this.avaliacoesEleitores.length;
		let avaliacaoEleitores = this.avaliacaoEleitores * PESO_ELEITORES;

        return avaliacaoEleitores / 10;
    }
    
    public incluirAvaliacaoEleitor(cpf: string, avaliacao: number) {
		if (this.avaliacoesEleitores.some(ae => ae.cpf === cpf)) {
			// TODO: Mensagem ("Já existe uma avaliaçãoo com este CPF ("+ cpf +").");
			return;
		}

		if (avaliacao < 0 || avaliacao > 10) {
			// TODO: Mensagem ("A avaliaçãoo de um mandato deve ser uma nota de 0 a 10.");
			return;
		}

		this.avaliacoesEleitores.push(new AvaliacaoEleitor(cpf, avaliacao));
	}
}

export enum TipoMandato{
    EXECUTIVO = 'Executivo',
    LEGISLATIVO = 'Legislativo'
}
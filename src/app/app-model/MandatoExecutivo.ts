import { Mandato, TipoMandato } from './Mandato';

const PESO_PROMESSAS_CAMPANHA: number = 4;

export class MandatoExecutivo extends Mandato{
    constructor(
        anoInicial: number, 
        anoFinal:number, 
        private promessasCampanha: number, 
        private promessasCumpridas: number
    ) {
        super(anoInicial, anoFinal);
        this.tipoMandato = TipoMandato.EXECUTIVO;
    }
    
    avaliar():number {
        let avaliacaoPromessaCampanha = (this.promessasCumpridas / this.promessasCampanha) * PESO_PROMESSAS_CAMPANHA;

        return this.avaliacao;
        /*
            double avaliacaoPromessasCampanha = (promessasCumpridas / (double) promessasCampanha) * PESO_PROMESSAS_CAMPANHA;
		
            setAvaliacao(avaliacaoPromessasCampanha + avaliarDenuncias() + contabilizarAvaliacaoEleitores());
            return getAvaliacao();
        */
    }
}
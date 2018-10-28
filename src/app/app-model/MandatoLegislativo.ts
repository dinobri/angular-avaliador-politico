import { Mandato, TipoMandato } from './Mandato';

const PESO_PRESENCA: number = 2;
const PESO_PROJETOS: number = 2;

export class MandatoLegislativo extends Mandato {
    constructor(
        anoInicial: number,
        anoFinal: number,
        private presenca: number,
        private projetosPropostos: number,
        private projetosAprovados: number
    ) {
        super(anoInicial, anoFinal);
        this.tipoMandato = TipoMandato.LEGISLATIVO;
    }

    avaliar(): number {
        throw new Error('Method not implemented.');
    }
}
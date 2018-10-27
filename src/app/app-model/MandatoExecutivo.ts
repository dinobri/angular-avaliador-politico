import { Mandato } from './Mandato';

const PESO_PROMESSAS_CAMPANHA: number = 4;

export class MandatoExecutivo extends Mandato{
    constructor(anoInicial: number, anoFinal:number, private promessasCampanha: number, private promessasCumpridas: number){
        super(anoInicial, anoFinal);
    }
}
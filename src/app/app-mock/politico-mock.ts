import { Politico } from '../app-model/Politico';
import { PARTIDOS } from './partido-mock';
import { Partido } from '../app-model/Partido';
import { Mandato } from '../app-model/Mandato';
import { MandatoExecutivo } from '../app-model/MandatoExecutivo';
import { MandatoLegislativo } from '../app-model/MandatoLegislativo';

const partidos: Partido[] = PARTIDOS;

const pCientistas = PARTIDOS[2];
const pCodigoAberto = PARTIDOS[0];
const pCorporativo = PARTIDOS[1];

export const POLITICOS: Politico[] = [
    new Politico('Ada Lovelace', pCientistas),
    new Politico('Linus Torvalds', pCodigoAberto),
    new Politico('Richard Stallman', pCorporativo)
];

let m1, m2, m3;

// ADA LOVELACE
const adaLovelace = new Politico('Ada Lovelace', pCientistas);

m1 = new MandatoLegislativo(2011, 2014, 0.9, 8, 8);
m2 = new MandatoLegislativo(2015, 2018, 0.93, 43, 37);
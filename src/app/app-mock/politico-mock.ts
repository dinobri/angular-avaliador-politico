import { Politico } from '../app-model/Politico';
import { PARTIDOS } from './partido-mock';
import { Partido } from '../app-model/Partido';

const partidos: Partido[] = PARTIDOS;

const pCientistas = PARTIDOS[2];
const pCodigoAberto = PARTIDOS[0];
const pCorporativo = PARTIDOS[1];

export const POLITICOS: Politico[] = [
    new Politico('Ada Lovelace', pCientistas),
    new Politico('Linus Torvalds', pCodigoAberto),
    new Politico('Richard Stallman', pCorporativo)
];


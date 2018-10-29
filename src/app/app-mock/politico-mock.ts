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


let m1: Mandato, m2: Mandato, m3: Mandato;

// ADA LOVELACE
const adaLovelace = new Politico('Ada Lovelace', pCientistas);

m1 = new MandatoLegislativo(2011, 2014, 0.9, 8, 8);
m1.incluirAvaliacaoEleitor("00186371276", 9);
m1.incluirAvaliacaoEleitor("91254112032", 10);

m2 = new MandatoLegislativo(2015, 2018, 0.93, 43, 37);
m2.incluirAvaliacaoEleitor("00186371276", 8);
m2.incluirAvaliacaoEleitor("91254112032", 10);

adaLovelace.mandatos.push(m1, m2);

// Linus Torvalds
const linus = new Politico('Linus Torvalds', pCodigoAberto);

m1 = new MandatoLegislativo(2011, 2014, 0.6, 29, 18);
m1.incluirAvaliacaoEleitor("00186371276", 8);
m1.incluirAvaliacaoEleitor("91254112032", 8);
        
m2 = new MandatoExecutivo(2015, 2018, 48, 33);
m2.incluirAvaliacaoEleitor("00186371276", 9);
m2.incluirAvaliacaoEleitor("91254112032", 6);

linus.mandatos.push(m1, m2);

// Richard Stallman
const stallman = new Politico('Richard Stallman', pCorporativo);

m1 = new MandatoLegislativo(2011, 2014, 0.8, 35, 27);
m1.incluirAvaliacaoEleitor("00186371276", 9);
m1.incluirAvaliacaoEleitor("91254112032", 4);

stallman.mandatos.push(m1);


export const POLITICOS: Politico[] = [
    adaLovelace,
    linus,
    stallman
];
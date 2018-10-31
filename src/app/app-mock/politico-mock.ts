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

// MARGARET HAMILTON
const hamilton = new Politico('Margaret Hamilton', pCientistas);

m1 = new MandatoLegislativo(1995, 1998, 1, 12, 4);
m1.incluirAvaliacaoEleitor("00186371276", 9);
m1.incluirAvaliacaoEleitor("91254112032", 8);
        
m2 = new MandatoExecutivo(2011, 2014, 22, 17);
m2.incluirAvaliacaoEleitor("00186371276", 8);
m2.incluirAvaliacaoEleitor("91254112032", 8);

m3 = new MandatoLegislativo(2015, 2018, 0.98, 14, 14);
m3.incluirAvaliacaoEleitor("00186371276", 8);
m3.incluirAvaliacaoEleitor("91254112032", 10);

hamilton.mandatos.push(m1, m2, m3);

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
const stallman = new Politico('Richard Stallman', pCodigoAberto);

m1 = new MandatoLegislativo(2011, 2014, 0.8, 35, 27);
m1.incluirAvaliacaoEleitor("00186371276", 9);
m1.incluirAvaliacaoEleitor("91254112032", 4);

stallman.mandatos.push(m1);

// Bill Gates
const bill = new Politico('Bill Gates', pCorporativo);
        
m1 = new MandatoExecutivo(2011, 2014, 22, 18);
m1.denuncias += 2;
m1.incluirAvaliacaoEleitor("00186371276", 7);
m1.incluirAvaliacaoEleitor("91254112032", 6);
        
m2 = new MandatoExecutivo(2015, 2018, 27, 20);
m2.denuncias += 2;
m2.incluirAvaliacaoEleitor("00186371276", 8);
m2.incluirAvaliacaoEleitor("91254112032", 7);

bill.mandatos.push(m1, m2);

// James Gosling
const gosling = new Politico('James Gosling', pCorporativo);

m1 = new MandatoLegislativo(2011, 2014, 1, 8, 7);
m1.incluirAvaliacaoEleitor("00186371276", 8);
m1.incluirAvaliacaoEleitor("91254112032", 7);
        
m2 = new MandatoExecutivo(2015, 2018, 32, 28);
m2.incluirAvaliacaoEleitor("00186371276", 8);
m2.incluirAvaliacaoEleitor("91254112032", 9);

gosling.mandatos.push(m1, m2);


export const POLITICOS: Politico[] = [
    adaLovelace,
    linus,
    stallman,
    hamilton,
    bill,
    gosling
];
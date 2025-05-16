import {
  filtrarChuvasHoje,
  filtrarProximosDoisMeses
} from './functions/function.js'

console.log("Chuvas de Meteoros")

const dia = new Date();
const diaHoje = dia.getDate().toString().padStart(2, '0');
const mesAtual = dia.getMonth().toString().padStart(2, '0');

console.log("chuvas meteoros hoje");
console.log(filtrarChuvasHoje(diaHoje,mesAtual));
console.log("chuvas meteoros 2 meses");
console.log(filtrarProximosDoisMeses(diaHoje));


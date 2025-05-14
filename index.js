import chuvasMeteoros from './data/chuva-de-meteoro.js';

console.log("Chuvas de Meteoros")

const nome = chuvasMeteoros.map (chuva => ({
  nome: chuva.nome
}));

const todasChuvas = chuvasMeteoros.filter (chuva => ({}));
console.log(nome);
console.log(todasChuvas);

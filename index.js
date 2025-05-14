import chuvasMeteoros from './data/chuva-de-meteoro.js';

console.log("Chuvas de Meteoros")


const filtrarChuvasHoje = () => {
  const hoje = new Date();

  const dia = hoje.getDate().toString().padStart(2, '0');
  const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');

  const dataFormatada = `${dia}/${mes}`;

  return chuvasMeteoros.filter(chuva => {
    const [inicioDia, inicioMes] = chuva.inicio.split('/');
    const [fimDia, fimMes] = chuva.fim.split('/');

    const inicioFormatado = `${inicioDia.padStart(2, '0')}/${inicioMes.padStart(2, '0')}`;
    const fimFormatado = `${fimDia.padStart(2, '0')}/${fimMes.padStart(2, '0')}`;

    return dataFormatada >= inicioFormatado && dataFormatada <= fimFormatado;

  })
};

const filtrarProximosDoisMeses = () => {
  const hoje = new Date();
  const mesAtual = hoje.getMonth() + 1;
  const anoAtual = hoje.getFullYear();

  let mesFuturo = mesAtual + 2;
  let anoFuturo = anoAtual;

  if (mesFuturo > 12) {
    mesFuturo -= 12;
    anoFuturo -= 12;
  }

  return chuvasMeteoros.filter(chuva => {
    const inicioMes = parseInt(chuva.inicio.split('/')[1]);
    const fimMes = parseInt(chuva.fim.split('/')[1]);

    return (
      (inicioMes >= mesAtual && inicioMes <= mesFuturo) ||
      (fimMes >= mesAtual && fimMes <= mesFuturo) ||
      (inicioMes <= mesAtual && fimMes <= mesFuturo)
    );
  })
}
console.log("METEOROS HOJE " + filtrarChuvasHoje());
console.log("METEOROS 2 MESES " + filtrarProximosDoisMeses())

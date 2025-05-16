import chuvasMeteoros from "../data/chuva-de-meteoro.js";

const filtrarChuvasHoje = () => {
  const hoje = new Date();

  const dia = hoje.getDate().toString().padStart(2, '0');
  const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
  const ano = (hoje.getFullYear()).toString();

  const dataFormatada = `${dia}/${mes}`;

  const chuvasAtivas = chuvasMeteoros.filter(chuva => {
    const [inicioDia, inicioMes] = chuva.inicio.split('/');
    const [fimDia, fimMes] = chuva.fim.split('/');

    const inicioFormatado = `${inicioDia.padStart(2, '0')}/${inicioMes.padStart(2, '0')}`;
    const fimFormatado = `${fimDia.padStart(2, '0')}/${fimMes.padStart(2, '0')}${ano}`;

    return dataFormatada >= inicioFormatado && dataFormatada <= fimFormatado;
  })
  if (chuvasAtivas.length === 0) {
    console.log(`Não há chuvas de meteoro ativas em ${dataFormatada}/${ano}.`);
    return [];
  }
  return chuvasAtivas;
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

export {filtrarChuvasHoje, filtrarProximosDoisMeses};

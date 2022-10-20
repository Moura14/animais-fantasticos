export default function initFunctionamento() {
  const functionamento = document.querySelector("[data-semana]");
  const diasSemana = functionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = functionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horatioAgora = dataAgora.getHours();

  const semanaAberta = diasSemana.indexOf(diaAgora) !== -1;

  const horarioAberto =
    horatioAgora >= horarioSemana[0] && horatioAgora < horarioSemana[1];

  if (semanaAberta && horarioAberto) {
    functionamento.classList.add("aberto");
  }
}

export default function initAcordion() {
  const acordionList = document.querySelectorAll('[data-anime="acordion"] dt');
  const ativoClass = "ativo";

  function activeAccordion() {
    this.nextElementSibling.classList.toggle(ativoClass);
  }

  if (acordionList.length) {
    acordionList[0].classList.add(ativoClass);
    acordionList[0].nextElementSibling.classList.add(ativoClass);

    acordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

console.log("Dev mode");

import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</> <span data-numero>${animal.total}</span>`;

    return div;
  }
  async function fetchAnimais(url) {
    try {
      const animaisReponse = await fetch(url);
      const animaisJson = await animaisReponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");

      animaisJson.forEach((animal) => {
        const divAnimail = createAnimal(animal);
        numerosGrid.appendChild(divAnimail);
      });
      initAnimaNumeros();
    } catch (erro) {}
  }

  fetchAnimais("./animaisapi.json");
}

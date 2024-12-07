import startGame from "./startGame";

import strategia from "./strategia";

const pressStart = () => {
  const start = document.querySelector(".start");

  const infoGeneral = document.querySelector(".info-general p");

  start.addEventListener("click", () => {
    startGame();

    strategia();

    infoGeneral.textContent = "The game has started";

    document.querySelector(".start").disabled = true;
  });
};

export default pressStart;

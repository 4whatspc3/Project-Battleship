import startGame from "./startGame";

import strategia from "./strategia";

import showInfoPlayer from "./showInfoPlayer";

import btnDirection from "./btnDirection";

const pressStart = () => {
  const start = document.querySelector(".start");

  const infoGeneral = document.querySelector(".info-general p");

  start.addEventListener("click", () => {
    startGame();

    strategia();

    infoGeneral.textContent = "The game has started";

    showInfoPlayer(1);

    btnDirection();

    document.querySelector(".start").disabled = true;
  });
};

export default pressStart;

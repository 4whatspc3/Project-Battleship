import startGame from "./startGame";

import showInfo from "./showInfo";

import btnDirection from "./btnDirection";

const pressStart = () => {
  const start = document.querySelector(".start");

  const infoGeneral = document.querySelector(".info-general p");

  start.addEventListener("click", () => {
    startGame();

    infoGeneral.textContent = "The game has started";

    showInfo();

    btnDirection();

    document.querySelector(".start").disabled = true;
  });
};

export default pressStart;

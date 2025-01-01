import startGame from "./comp02_startGame";

import showInfo from "./DOM_subcomponents/showInfo";

import btnDirection from "./DOM_subcomponents/btnDirection";

const pressStart = () => {
  document.querySelector(".reset").disabled = true;

  const start = document.querySelector(".start");

  const infoGeneral = document.querySelector(".info-general p");

  start.addEventListener("click", () => {
    startGame();

    infoGeneral.textContent = "The game has started";

    showInfo();

    btnDirection();

    document.querySelector(".start").disabled = true;

    document.querySelector(".reset").disabled = false;
  });
};

export default pressStart;

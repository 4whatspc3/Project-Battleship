import startGame from "./startGame";

import strategia from "./strategia";

const pressStart = () => {
  const start = document.querySelector(".start");

  start.addEventListener("click", () => {
    startGame();

    strategia();

    document.querySelector(".start").disabled = true;
  });
};

export default pressStart;

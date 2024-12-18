import getShips from "./getShips";

import showInfo from "./showInfo";

const strategia = (playerOne, playerBoard) => {
  let boardCopy = JSON.parse(JSON.stringify(playerBoard));

  let turn = 0;

  const squareCoords = document.querySelectorAll(".board-1 [data-x]");

  squareCoords.forEach((square) => {
    square.addEventListener("click", (e) => {
      const x = e.target.parentNode.dataset.x;
      const y = e.target.dataset.y;

      getShips(playerOne, turn, playerBoard, x, y);

      console.log(playerOne.myShips);

      if (JSON.stringify(playerBoard) !== JSON.stringify(boardCopy)) {
        boardCopy = JSON.parse(JSON.stringify(playerBoard));

        turn++;

        showInfo(turn);
      }
    });
  });
};

export default strategia;

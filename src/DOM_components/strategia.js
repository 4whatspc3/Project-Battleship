import getShips from "./getShips";

import showInfoPlayer from "./showInfoPlayer";

const strategia = (playerBoard) => {
  let boardCopy = JSON.parse(JSON.stringify(playerBoard));

  let turn = 0;

  const squareCoords = document.querySelectorAll(".board-1 [data-x]");

  squareCoords.forEach((square) => {
    square.addEventListener("click", (e) => {
      const x = e.target.parentNode.dataset.x;
      const y = e.target.dataset.y;

      getShips(turn, playerBoard, x, y);

      if (JSON.stringify(playerBoard) !== JSON.stringify(boardCopy)) {
        boardCopy = JSON.parse(JSON.stringify(playerBoard));

        turn++;

        showInfoPlayer(turn);
      }
    });
  });
};

export default strategia;

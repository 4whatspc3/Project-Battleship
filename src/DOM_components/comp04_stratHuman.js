import getShips from "./comp05_getShips";

import showInfo from "./DOM_subcomponents/showInfo";

const strategia = (playerOne, boardOne, boardTwo) => {
  let boardCopy = JSON.parse(JSON.stringify(boardOne.array2D));

  let turn = 0;

  const squareCoords = document.querySelectorAll(".board-1 [data-x]");

  squareCoords.forEach((square) => {
    square.addEventListener("click", (e) => {
      const x = e.target.parentNode.dataset.x;
      const y = e.target.dataset.y;

      getShips(playerOne, turn, boardOne.array2D, x, y);

      if (JSON.stringify(boardOne.array2D) !== JSON.stringify(boardCopy)) {
        boardCopy = JSON.parse(JSON.stringify(boardOne.array2D));

        turn++;

        showInfo(turn);

        if (turn === 5) {
          boardTwo.changeBoardState(false);

          boardOne.changeBoardState(false);

          playerOne.myBoard = boardOne;
        }
      }
    });
  });
};

export default strategia;

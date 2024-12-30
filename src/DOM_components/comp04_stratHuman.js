import getShips from "./comp05_getShips";

import showInfo from "./DOM_subcomponents/showInfo";

const strategia = (playerOne, playerBoard, computerBoard) => {
  let boardCopy = JSON.parse(JSON.stringify(playerBoard.array2D));

  let turn = 0;

  const squareCoords = document.querySelectorAll(".board-1 [data-x]");

  squareCoords.forEach((square) => {
    square.addEventListener("click", (e) => {
      const x = e.target.parentNode.dataset.x;
      const y = e.target.dataset.y;

      getShips(playerOne, turn, playerBoard.array2D, x, y);

      console.log(playerOne.myShips);

      if (JSON.stringify(playerBoard.array2D) !== JSON.stringify(boardCopy)) {
        boardCopy = JSON.parse(JSON.stringify(playerBoard.array2D));

        turn++;

        showInfo(turn);

        if (turn === 5) {
          computerBoard.changeBoardState(false);

          playerBoard.changeBoardState(false);
        }
      }
    });
  });
};

export default strategia;

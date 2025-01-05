import infoGeneral from "./DOM_subcomponents/infoGeneral";

const battle = (playerOne, boardOne, playerTwo, boardTwo) => {
  const squareCoords = document.querySelectorAll(".board-2 [data-x]");

  squareCoords.forEach((square) => {
    square.addEventListener("click", (e) => {
      const x = e.target.parentNode.dataset.x;
      const y = e.target.dataset.y;

      if (x !== undefined || y !== undefined) {
        //////player 2 receive attack///////
        if (e.target.dataset.clicked === "false") {
          e.target.className = "missed";

          e.target.dataset.clicked = "true";

          const enemyShipAtIndex = playerTwo.findMyShip(x, y);

          if (boardTwo.isShip(x, y)) {
            thereWasAShip(enemyShipAtIndex, playerTwo, e, div);
          }

          /////player 1 Receive attack//////////
          const divs = document.querySelectorAll(".board-1 [data-y]");

          let xL, yL, num;

          do {
            xL = getRandomInt(10);
            yL = getRandomInt(10);
            num = xL * 10 + yL;
          } while (boardOne.selectedCoords.has(num));

          const div = divs[num];

          if (div) {
            boardOne.selectedCoords.add(num);

            if (div.dataset.clicked === "false") {
              div.className = "missed";

              div.dataset.clicked = "true";

              const allyShipAtIndex = playerOne.findMyShip(xL, yL);

              if (boardOne.isShip(xL, yL)) {
                thereWasAShip(allyShipAtIndex, playerOne, e, div);
              }
            }
          }
        }
      }

      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    });
  });

  function thereWasAShip(shipAtIndex, playerNumber, e, div) {
    shipAtIndex.hit();

    if (playerNumber.name === "Player 1") {
      div.className = "damaged";
    } else {
      e.target.className = "scored";
    }

    const shipState = shipAtIndex.isSunk();

    playerNumber.checkShips(shipState);

    playerNumber.condition();

    if (playerNumber.status === "lost") {
      if (playerNumber.name === "Player 1") {
        infoGeneral(2);
      } else {
        infoGeneral(1);
      }

      boardOne.changeBoardState(true);

      boardTwo.changeBoardState(true);

      const infoPlayer = document.querySelector(`.info-1`);
      infoPlayer.remove();
    }
  }
};

export default battle;

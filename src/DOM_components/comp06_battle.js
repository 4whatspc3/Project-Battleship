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
            enemyShipAtIndex.hit();

            e.target.className = "scored";

            const shipState = enemyShipAtIndex.isSunk();

            playerTwo.checkShips(shipState);

            playerTwo.condition();

            if (playerTwo.status === "lost") {
              infoGeneral(1);

              boardOne.changeBoardState(true);

              boardTwo.changeBoardState(true);

              const infoPlayer = document.querySelector(`.info-1`);
              infoPlayer.remove();
            }
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

            console.log(`X: ${xL}, Y: ${yL}, Index: ${num}`);

            if (div.dataset.clicked === "false") {
              div.className = "missed";

              div.dataset.clicked = "true";

              const allyShipAtIndex = playerOne.findMyShip(xL, yL);

              if (boardOne.isShip(xL, yL)) {
                allyShipAtIndex.hit();

                div.className = "damaged";

                const shipState = allyShipAtIndex.isSunk();

                playerOne.checkShips(shipState);

                playerOne.condition();

                if (playerOne.status === "lost") {
                  infoGeneral(2);

                  boardOne.changeBoardState(true);

                  boardTwo.changeBoardState(true);

                  const infoPlayer = document.querySelector(`.info-1`);
                  infoPlayer.remove();
                }
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
};

export default battle;

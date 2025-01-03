import infoGeneral from "./DOM_subcomponents/infoGeneral";

const battle = (myPlayer, myBoard, enemyPlayer, enemyBoard) => {
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

          const result = enemyPlayer.myShips.findIndex(
            (obj) => obj.name === enemyBoard.array2D[x][y],
          );

          if (enemyBoard.isShip(x, y)) {
            enemyPlayer.myShips[result].hit();

            e.target.className = "scored";

            const shipState = enemyPlayer.myShips[result].isSunk();

            enemyPlayer.checkShips(shipState);

            enemyPlayer.condition();

            if (enemyPlayer.status === "lost") {
              infoGeneral(1);

              myBoard.changeBoardState(true);

              enemyBoard.changeBoardState(true);

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
          } while (myBoard.selectedCoords.has(num));

          const div = divs[num];

          if (div) {
            myBoard.selectedCoords.add(num);

            console.log(`X: ${xL}, Y: ${yL}, Index: ${num}`);

            if (div.dataset.clicked === "false") {
              div.className = "missed";

              div.dataset.clicked = "true";

              const result = myPlayer.myShips.findIndex(
                (obj) => obj.name === myBoard.array2D[xL][yL],
              );

              if (myBoard.isShip(xL, yL)) {
                myPlayer.myShips[result].hit();

                div.className = "damaged";

                const shipState = myPlayer.myShips[result].isSunk();

                myPlayer.checkShips(shipState);

                myPlayer.condition();

                if (myPlayer.status === "lost") {
                  infoGeneral(2);

                  myBoard.changeBoardState(true);

                  enemyBoard.changeBoardState(true);

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

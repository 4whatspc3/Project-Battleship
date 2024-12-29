const battle = (myBoard, myShips, enemyBoard, enemyShips) => {
  const squareCoords = document.querySelectorAll(".board-2 [data-x]");

  squareCoords.forEach((square) => {
    square.addEventListener("click", (e) => {
      const x = e.target.parentNode.dataset.x;
      const y = e.target.dataset.y;

      if (e.target.dataset.clicked === "false") {
        e.target.style.backgroundColor = "grey";

        myBoard.receiveAttack(myShips, x, y, e);

        e.target.dataset.clicked = "true";
      }

      const divs = document.querySelectorAll(".board-1 [data-y]");

      let xL, yL, num;

      do {
        xL = getRandomInt(10);
        yL = getRandomInt(10);
        num = xL * 10 + yL;
      } while (enemyBoard.selectedCoords.has(num));

      const div = divs[num];

      if (div) {
        enemyBoard.selectedCoords.add(num);

        console.log(`X: ${x}, Y: ${y}, Index: ${num}`);

        if (div.dataset.clicked === "false") {
          div.style.backgroundColor = "grey";

          div.dataset.clicked = "true";

          const result = myShips.findIndex(
            (obj) => obj.name === enemyBoard.array2D[xL][yL],
          );

          if (enemyBoard.isShip(xL, yL)) {
            enemyShips[result].hit();

            div.style.backgroundColor = "red";

            console.log(enemyShips[result]);
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

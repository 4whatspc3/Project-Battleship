const attackEnemy = (enemyShips, enemyBoard) => {
  const squareCoords = document.querySelectorAll(".board-2 [data-x]");

  squareCoords.forEach((square) => {
    square.addEventListener("click", (e) => {
      if (e.target.dataset.clicked === "false") {
        e.target.style.backgroundColor = "grey";

        const x = e.target.parentNode.dataset.x;
        const y = e.target.dataset.y;

        const result = enemyShips.findIndex(
          (obj) => obj.name === enemyBoard.array2D[x][y],
        );

        if (enemyBoard.isShip(x, y)) {
          enemyShips[result].hit();

          e.target.style.backgroundColor = "orange";

          console.log(enemyShips[result]);
        }

        e.target.dataset.clicked = "true";
      }
    });
  });
};

export default attackEnemy;

const attackEnemy = (enemyShips, enemyBoard) => {
  const squareCoords = document.querySelectorAll(".board-2 [data-x]");

  squareCoords.forEach((square) => {
    square.addEventListener("click", (e) => {
      const x = e.target.parentNode.dataset.x;
      const y = e.target.dataset.y;

      const result = enemyShips.findIndex(
        (obj) => obj.name === enemyBoard.array2D[x][y],
      );

      if (enemyBoard.isShip(x, y)) {
        enemyShips[result].hit();
        console.log(enemyShips[result]);
      }
    });
  });
};

export default attackEnemy;

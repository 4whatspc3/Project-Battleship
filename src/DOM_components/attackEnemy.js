const attackEnemy = (enemyBoard) => {
  console.log("oi");

  const squareCoords = document.querySelectorAll(".board-2 [data-x]");

  squareCoords.forEach((square) => {
    square.addEventListener("click", (e) => {
      const x = e.target.parentNode.dataset.x;
      const y = e.target.dataset.y;

      console.log(enemyBoard[x][y]);
    });
  });
};

export default attackEnemy;

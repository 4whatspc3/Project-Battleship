import gameboard from "../gameboard/gameboard";

const startGame = () => {
  const start = document.querySelector(".start");

  start.addEventListener("click", () => {
    console.log("I'm working right now");

    const board1 = new gameboard();

    const board2 = new gameboard();

    board1.getBoard();

    board2.getBoard();

    board1.boardDom(1);

    board2.boardDom(2);

    document.querySelector(".start").disabled = true;
  });
};

export default startGame;

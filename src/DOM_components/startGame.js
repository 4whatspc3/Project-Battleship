import gameboard from "../gameboard/gameboard";

const startGame = () => {
  console.log("I'm working right now");

  const board1 = new gameboard();

  const board2 = new gameboard();

  board1.getBoard();

  board2.getBoard();

  board1.boardDom(1);

  board2.boardDom(2);
};

export default startGame;

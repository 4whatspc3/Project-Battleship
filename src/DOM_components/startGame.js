import gameboard from "../gameboard/gameboard";

import player from "../player/player";

const startGame = () => {
  console.log("I'm working right now");
  const player1 = new player("Human", "Player 1");

  const board1 = new gameboard();

  const player2 = new player("Computer", "Player 2");

  const board2 = new gameboard();

  board1.getBoard();

  board2.getBoard();

  board1.boardDom(1);

  board2.boardDom(2);
};

export default startGame;

import gameboard from "../gameboard/gameboard";

import player from "../player/player";

import strategia from "./comp04_stratHuman";

import strategiaComputer from "./comp03_stratPC";

import attackEnemy from "./attackEnemy";

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

  strategiaComputer(player2, board2.array2D);

  strategia(player1, board1.array2D);

  attackEnemy(board2.array2D);
};

export default startGame;

import gameboard from "../gameboard/gameboard";

import player from "../player/player";

import strategia from "./comp04_stratHuman";

import strategiaComputer from "./comp03_stratPC";

import battle from "./comp06_battle";

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

  strategiaComputer(player2, board2);

  strategia(player1, board1, board2);

  battle(player1, board1, player2, board2);
};

export default startGame;

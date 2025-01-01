import ships from "../ships/ships";

const strategiaComputer = (playerTwo, computerBoard) => {
  let boardCopy = JSON.parse(JSON.stringify(computerBoard.array2D));

  let turn = 0;

  while (turn < 5) {
    let x = getRandomInt(10),
      y = getRandomInt(10),
      direction = getRandomDirection();

    switch (turn) {
      case 0:
        const carrier = new ships("carrier", 5, direction);
        carrier.passCoordShip(computerBoard.array2D, x, y);
        playerTwo.myShips[0] = carrier;
        break;
      case 1:
        const battleship = new ships("battleship", 4, direction);
        battleship.passCoordShip(computerBoard.array2D, x, y);
        playerTwo.myShips[1] = battleship;

        break;
      case 2:
        const destroyer = new ships("destroyer", 3, direction);
        destroyer.passCoordShip(computerBoard.array2D, x, y);
        playerTwo.myShips[2] = destroyer;

        break;
      case 3:
        const submarine = new ships("submarine", 3, direction);
        submarine.passCoordShip(computerBoard.array2D, x, y);
        playerTwo.myShips[3] = submarine;

        break;
      case 4:
        const patrolBoat = new ships("patrol boat", 2, direction);
        patrolBoat.passCoordShip(computerBoard.array2D, x, y);
        playerTwo.myShips[4] = patrolBoat;

        break;
      default:
        console.log("All enemy ships positioned");
    }

    if (JSON.stringify(computerBoard.array2D) !== JSON.stringify(boardCopy)) {
      boardCopy = JSON.parse(JSON.stringify(computerBoard.array2D));
      turn++;
    }
  }
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomDirection() {
  const number = Math.floor(Math.random() * 2);

  if (number === 0) {
    return "horizontal";
  } else {
    return "vertical";
  }
}

export default strategiaComputer;

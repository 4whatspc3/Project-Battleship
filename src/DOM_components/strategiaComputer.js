import ships from "../ships/ships";

const strategiaComputer = (computerBoard) => {
  let boardCopy = JSON.parse(JSON.stringify(computerBoard));

  let turn = 0;

  while (turn < 5) {
    let x = getRandomInt(10),
      y = getRandomInt(10),
      direction = getRandomDirection();

    switch (turn) {
      case 0:
        const carrier = new ships(5, direction);
        carrier.passCoordShip(computerBoard, x, y);
        break;
      case 1:
        const battleship = new ships(4, direction);
        battleship.passCoordShip(computerBoard, x, y);
        break;
      case 2:
        const destroyer = new ships(3, direction);
        destroyer.passCoordShip(computerBoard, x, y);
        break;
      case 3:
        const submarine = new ships(3, direction);
        submarine.passCoordShip(computerBoard, x, y);
        break;
      case 4:
        const patrolBoat = new ships(2, direction);
        patrolBoat.passCoordShip(computerBoard, x, y);
        break;
      default:
        console.log(counter);
    }

    if (JSON.stringify(computerBoard) !== JSON.stringify(boardCopy)) {
      boardCopy = JSON.parse(JSON.stringify(computerBoard));
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

import ships from "../ships/ships";

const getShips = (counter, playerBoard, x, y) => {
  const btn = document.querySelector(".board-1 button");

  switch (counter) {
    case 0:
      const carrier = new ships("carrier", 5, btn.className);
      carrier.passCoordShip(playerBoard, x, y);
      carrier.passCoordDOM(x, y);
      break;
    case 1:
      const battleship = new ships("battleship", 4, btn.className);
      battleship.passCoordShip(playerBoard, x, y);
      battleship.passCoordDOM(x, y);
      break;
    case 2:
      const destroyer = new ships("destroyer", 3, btn.className);
      destroyer.passCoordShip(playerBoard, x, y);
      destroyer.passCoordDOM(x, y);
      break;
    case 3:
      const submarine = new ships("submarine", 3, btn.className);
      submarine.passCoordShip(playerBoard, x, y);
      submarine.passCoordDOM(x, y);
      break;
    case 4:
      const patrolBoat = new ships("patrol boat", 2, btn.className);
      patrolBoat.passCoordShip(playerBoard, x, y);
      patrolBoat.passCoordDOM(x, y);
      break;
    default:
      console.log(playerBoard);
  }
};

export default getShips;

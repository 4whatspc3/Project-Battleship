import ships from "../ships/ships";

const getShips = (playerOne, counter, boardOne, x, y) => {
  const btn = document.querySelector(".info-playerOne button");

  switch (counter) {
    case 0:
      const carrier = new ships("carrier", 5, btn.className);
      carrier.passCoordShip(boardOne, x, y);
      carrier.passCoordDOM(x, y);
      playerOne.myShips[0] = carrier;
      break;
    case 1:
      const battleship = new ships("battleship", 4, btn.className);
      battleship.passCoordShip(boardOne, x, y);
      battleship.passCoordDOM(x, y);
      playerOne.myShips[1] = battleship;
      break;
    case 2:
      const destroyer = new ships("destroyer", 3, btn.className);
      destroyer.passCoordShip(boardOne, x, y);
      destroyer.passCoordDOM(x, y);
      playerOne.myShips[2] = destroyer;
      break;
    case 3:
      const submarine = new ships("submarine", 3, btn.className);
      submarine.passCoordShip(boardOne, x, y);
      submarine.passCoordDOM(x, y);
      playerOne.myShips[3] = submarine;
      break;
    case 4:
      const patrolBoat = new ships("patrol boat", 2, btn.className);
      patrolBoat.passCoordShip(boardOne, x, y);
      patrolBoat.passCoordDOM(x, y);
      playerOne.myShips[4] = patrolBoat;
      break;
    default:
      console.log(boardOne);
  }
};

export default getShips;

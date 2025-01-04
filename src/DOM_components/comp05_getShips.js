import ships from "../ships/ships";

const getShips = (playerOne, counter, boardOne, x, y) => {
  const btn = document.querySelector(".info-playerOne button");
  switch (counter) {
    case 0:
      const carrier = new ships("carrier", 5, btn.className);
      passCoords(carrier, 0);
      break;
    case 1:
      const battleship = new ships("battleship", 4, btn.className);
      passCoords(battleship, 1);
      break;
    case 2:
      const destroyer = new ships("destroyer", 3, btn.className);
      passCoords(destroyer, 2);
      break;
    case 3:
      const submarine = new ships("submarine", 3, btn.className);
      passCoords(submarine, 3);
      break;
    case 4:
      const patrolBoat = new ships("patrol boat", 2, btn.className);
      passCoords(patrolBoat, 4);
      break;
    default:
      console.log(boardOne);
  }

  function passCoords(shipName, counter) {
    shipName.passCoordShip(boardOne, x, y);

    shipName.passCoordDOM(x, y);

    playerOne.myShips[counter] = shipName;
  }
};

export default getShips;

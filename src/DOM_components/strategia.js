import ships from "../ships/ships";

const strategia = () => {
  let turn = 0;

  const squareCoords = document.querySelectorAll(".board-1 [data-coord]");

  squareCoords.forEach((square) => {
    square.addEventListener("click", (e) => {
      console.log(`${e.target.dataset.coord}`);

      getShips(turn);

      turn++;
    });
  });
};

const getShips = (counter) => {
  const btn = document.querySelector(".board-1 button");

  switch (counter) {
    case 0:
      const carrier = new ships(5, btn.className);
      console.log(carrier.direction);
      break;
    case 1:
      const battleship = new ships(4, btn.className);
      console.log(battleship.direction);
      break;
    case 2:
      const destroyer = new ships(3, btn.className);
      console.log(destroyer.direction);
      break;
    case 3:
      const submarine = new ships(3, btn.className);
      console.log(submarine.direction);
      break;
    case 4:
      const patrolBoat = new ships(2, btn.className);
      console.log(patrolBoat.direction);
      break;
    default:
      console.log(counter);
  }
};

export default strategia;

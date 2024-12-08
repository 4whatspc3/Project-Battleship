import ships from "../ships/ships";

const strategia = () => {
  const squareCoords = document.querySelectorAll(".board-1 [data-coord]");

  squareCoords.forEach((square) => {
    square.addEventListener("click", (e) => {
      console.log(`${e.target.dataset.coord}`);
    });
  });
};

export default strategia;

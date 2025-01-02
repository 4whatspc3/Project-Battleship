class gameboard {
  constructor() {
    this.x = 10;
    this.y = 10;
    this.array2D = [];
    this.selectedCoords = new Set();
  }

  getBoard() {
    for (let i = 0; i < this.x; i++) {
      this.array2D[i] = []; // Initialize a new row
      for (let j = 0; j < this.y; j++) {
        this.array2D[i][j] = `x: ${i}, y: ${j}`; // Assign a value
      }
    }

    return this.array2D;
  }

  boardDom(num) {
    const grid = document.querySelector(`.board-${num} > div`);

    for (let i = 0; i < 10; i++) {
      const x = document.createElement("div");

      x.setAttribute("data-x", `${i}`);

      for (let j = 0; j < 10; j++) {
        const y = document.createElement("div");

        y.setAttribute("data-y", `${j}`);

        y.setAttribute("data-clicked", "true");

        x.append(y);
      }

      grid.append(x);
    }

    return grid;
  }

  changeBoardState(state) {
    const grid = document.querySelectorAll(`[data-y]`);

    grid.forEach((square) => {
      square.dataset.clicked = `${state}`;
    });
  }

  isShip(coordX, coordY) {
    if (this.array2D[coordX][coordY] !== `x: ${coordX}, y: ${coordY}`) {
      return true;
    } else {
      return false;
    }
  }

  receiveAttack(myShips, x, y, e) {
    const result = myShips.findIndex((obj) => obj.name === this.array2D[x][y]);

    if (this.isShip(x, y)) {
      myShips[result].hit();

      e.target.style.backgroundColor = "orange";

      console.log(myShips[result]);
    }
  }
}

export default gameboard;

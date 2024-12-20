class gameboard {
  constructor() {
    this.x = 10;
    this.y = 10;
    this.array2D = [];
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
    const grid = document.querySelector(`.board-${num} > div:last-of-type`);

    for (let i = 0; i < 10; i++) {
      const x = document.createElement("div");

      x.setAttribute("data-x", `${i}`);

      for (let j = 0; j < 10; j++) {
        const y = document.createElement("div");

        y.setAttribute("data-y", `${j}`);

        if (num === 2) {
          y.setAttribute("data-clicked", "true");
        }

        x.append(y);
      }

      grid.append(x);
    }

    return grid;
  }

  boardState(state) {
    const grid = document.querySelectorAll(`.board-2 [data-y]`);

    if (state === "unlock")
      grid.forEach((square) => {
        square.dataset.clicked = "false";
      });

    if (state === "lock")
      grid.forEach((square) => {
        square.dataset.clicked = "true";
      });
  }

  isShip(coordX, coordY) {
    if (this.array2D[coordX][coordY] !== `x: ${coordX}, y: ${coordY}`) {
      return true;
    } else {
      return false;
    }
  }
}

export default gameboard;

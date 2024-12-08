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
    const grid = document.querySelector(`.board-${num} div`);

    for (let i = 0; i < 10; i++) {
      const row = document.createElement("div");

      row.setAttribute("data-row", `${i}`);

      for (let j = 0; j < 10; j++) {
        const coord = document.createElement("div");

        coord.setAttribute("data-coord", `x: ${i}, y: ${j}`);

        row.append(coord);
      }

      grid.append(row);
    }

    return grid;
  }

  isMissing(coordX, coordY) {
    if (this.array2D[coordX][coordY] === `missed shot`) {
      return true;
    }

    if (this.array2D[coordX][coordY] === `x: ${coordX}, y: ${coordY}`) {
      return `missed shot`;
    }

    return false;
  }

  isShip(coordX, coordY) {
    if (this.array2D[coordX][coordY] === `there is a ship`) {
      return true;
    } else {
      return false;
    }
  }

  isDamagedShip(coordX, coordY) {
    if (this.array2D[coordX][coordY] === `damaged ship`) {
      return true;
    } else {
      return false;
    }
  }
}

export default gameboard;

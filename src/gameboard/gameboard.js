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

  isMissing(coordX, coordY) {
    if (this.array2D[coordX][coordY] === `missed shot`) {
      return true;
    } else {
      return false;
    }
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

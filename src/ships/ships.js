class ships {
  constructor(length, direction) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.direction = direction || "horizontal";
  }

  hit() {
    return this.hits++;
  }

  isSunk() {
    if (this.hits === this.length) {
      this.sunk = true;

      return this.sunk;
    }
  }

  passCoordShip(board, firstX, firstY) {
    let size = this.length,
      coordX = firstX,
      coordY = firstY;

    if (this.direction === "vertical") {
      while (size > 0) {
        if (board[coordX][coordY] !== `x: ${coordX}, y: ${coordY}`) {
          return "Already being used";
        }
        coordY++;

        size--;
      }

      size = this.length;
      coordY = firstY;

      while (size > 0) {
        board[coordX][coordY] = `there is a ship`;

        coordY++;

        size--;
      }
    } else {
      while (size > 0) {
        if (board[coordX][coordY] !== `x: ${coordX}, y: ${coordY}`) {
          return "Already being used";
        }
        coordX++;

        size--;
      }

      size = this.length;
      coordX = firstX;

      while (size > 0) {
        board[coordX][coordY] = `there is a ship`;

        coordX++;

        size--;
      }
    }
  }
}

export default ships;

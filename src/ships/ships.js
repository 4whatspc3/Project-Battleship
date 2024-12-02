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
    let size = this.length;

    if (this.direction === "vertical") {
      while (size > 0) {
        board[firstX][firstY] = `there is a ship`;

        firstX++;

        size--;
      }
    } else {
      while (size > 0) {
        board[firstX][firstY] = `there is a ship`;

        firstY++;

        length--;
      }
    }
  }
}

export default ships;

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

    while (size > 0) {
      if (
        board[coordX] === board[9] ||
        board[coordX][coordY] === board[coordX][9]
      ) {
        return "Overextends the gameboard";
      }

      size--;
    }

    size = this.length;

    if (this.direction === "vertical") {
      while (size > 0) {
        if (
          board[coordX][coordY] === undefined ||
          board[coordX][coordY] !== `x: ${coordX}, y: ${coordY}`
        ) {
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
        if (
          board[coordX] === undefined ||
          board[coordX][coordY] !== `x: ${coordX}, y: ${coordY}`
        ) {
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

  passCoordDOM(firstX, firstY) {
    let size = this.length,
      coordX = firstX,
      coordY = firstY;

    for (let i = 0; i < size; i++) {
      const horizontal = document.querySelector(
        `.board-1 [data-x="${coordX}"]`,
      );

      if (horizontal === null) {
        return "Overextends the gameboard";
      }

      const vertical = horizontal.querySelector(`[data-y="${coordY}"]`);

      if (vertical === null) {
        return "Overextends the gameboard";
      }

      if (this.direction === "vertical") {
        coordY++;
      } else {
        coordX++;
      }
    }

    coordX = firstX;
    coordY = firstY;

    for (let i = 0; i < size; i++) {
      const horizontal = document.querySelector(
        `.board-1 [data-x="${coordX}"]`,
      );

      const vertical = horizontal.querySelector(`[data-y="${coordY}"]`);

      vertical.className = "shipPlaced";

      if (this.direction === "vertical") {
        coordY++;
      } else {
        coordX++;
      }
    }
  }
}

export default ships;

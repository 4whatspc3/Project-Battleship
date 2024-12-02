class placement {
  constructor(size, direction) {
    this.size = size;
    this.direction = direction || "horizontal";
  }

  passCoordShip(yourBoard, firstX, firstY) {
    if (this.direction === "vertical") {
      while (this.size > 0) {
        yourBoard[firstX][firstY] = `there is a ship`;

        firstX++;

        this.size--;
      }
    } else {
      while (this.size > 0) {
        yourBoard[firstX][firstY] = `there is a ship`;

        firstY++;

        this.size--;
      }
    }
  }
}

export default placement;

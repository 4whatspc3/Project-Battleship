class player {
  constructor(type, name) {
    this.name = name;
    this.type = type || "computer";
    this.myBoard = [];
    this.myShips = [];
    this.numberOfShips = 5;
    this.status = "alive";
  }

  checkShips(myShipSunk) {
    if (myShipSunk === true) {
      this.numberOfShips--;
    }
  }

  condition() {
    if (this.numberOfShips === 0) {
      return (this.status = "lost");
    }
  }

  findMyShip(x, y) {
    const result = this.myShips.findIndex(
      (obj) => obj.name === this.myBoard.array2D[x][y],
    );

    return this.myShips[result];
  }
}

export default player;

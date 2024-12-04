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
}

export default player;

import player from "./player";

const player1 = new player("human", "Player 1");

test("check for 'player1' properties", () => {
  expect(player1).toEqual({
    name: "Player 1",
    type: "human",
    myBoard: [],
    myShips: [],
    numberOfShips: 5,
    status: "alive",
  });
});

test("One of Player 1's ships has been destroyed, so his number of ships should decrease", () => {
  let myShip = true;

  player1.checkShips(myShip);
  expect(player1.numberOfShips).toBe(4);
});

test("Player 1 has lost all his ships, so his status should be updated to 'lost'", () => {
  let i = 0;
  let myShip = true;

  while (i < 4) {
    player1.checkShips(myShip);

    i++;
  }

  expect(player1.condition()).toBe("lost");
});

test("Player 1 is able to store 3 ships", () => {
  player1.myShips.push("shipA", "shipB", "shipC");

  expect(player1.myShips).toEqual(["shipA", "shipB", "shipC"]);
});

test("Player 1 is able to store 3 ships", () => {
  function fakeBoard() {
    let array2D = [],
      x = 10,
      y = 10;

    for (let i = 0; i < x; i++) {
      array2D[i] = []; // Initialize a new row
      for (let j = 0; j < y; j++) {
        array2D[i][j] = `x: ${i}, y: ${j}`; // Assign a value
      }
    }

    return array2D;
  }

  const board = fakeBoard();

  player1.myBoard.push(board);

  expect(player1.myBoard).toEqual([board]);
});

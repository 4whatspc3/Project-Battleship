import placement from "./placement";

const shipPlace = new placement(5, "vertical");

test("Given a ship with a length of 5, 'placement' should have a property 'size' with a value of '5'", () => {
  expect(shipPlace.size === 5).toBe(true);
});

test("Given a ship with a vertical direction, 'placement' should also have a property 'direction' with the value 'vertical'", () => {
  expect(shipPlace.direction).toBe("vertical");
});

test("Given a gameboard and the initial coordinates of a ship, the 'passCoord' method can place the rest of the ship in the correct positions", () => {
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

  shipPlace.passCoordShip(board, 2, 3);
  expect(board[2][3]).toBe("there is a ship");
  expect(board[4][3]).toBe("there is a ship");
  expect(board[6][3]).toBe("there is a ship");
});

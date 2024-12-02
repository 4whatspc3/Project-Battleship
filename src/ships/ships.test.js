import ships from "./ships";

describe("Test properties and hit() and isSunk() methods", () => {
  test("A new ships has an arbitrary length, but returns the default 'hits' and 'sunk' values", () => {
    const shipA = new ships(5);
    expect(shipA).toEqual({
      direction: "horizontal",
      length: 5,
      hits: 0,
      sunk: false,
    });
  });

  test("When invoked, 'hit()' method increases new ship 'hits' from '0' to '1'", () => {
    const shipB = new ships(3);
    shipB.hit();

    expect(shipB).toEqual(
      expect.objectContaining({
        hits: 1,
      }),
    );
  });

  test("The number of hits is equal to the ship's length, therefore 'isSunk()' should return 'sunk' as 'true'", () => {
    const shipC = new ships(1);
    shipC.hit();
    shipC.isSunk();

    expect(shipC).toEqual(
      expect.objectContaining({
        sunk: true,
      }),
    );
  });

  test("The number of hits is not equal to the ship's length, therefore 'isSunk()' should return 'sunk' as 'false'", () => {
    const shipD = new ships(2);
    shipD.hit();
    shipD.isSunk();

    expect(shipD).toEqual(
      expect.objectContaining({
        sunk: false,
      }),
    );
  });
});

describe("Test passCoordShip() method", () => {
  const shipA = new ships(5, "vertical");

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

  test("Given a ship with a vertical direction, 'placement' should also have a property 'direction' with the value 'vertical'", () => {
    expect(shipA.direction).toBe("vertical");
  });

  test("Given a gameboard and the initial coordinates of a ship, the 'passCoord' method can place the rest of the ship in the correct positions", () => {
    shipA.passCoordShip(board, 2, 3);
    expect(board[2][3]).toBe("there is a ship");
    expect(board[4][3]).toBe("there is a ship");
    expect(board[6][3]).toBe("there is a ship");
  });

  test("shipB can't be placed at the given coordinates, because it's already being used", () => {
    const shipB = new ships(3, "horizontal");

    expect(shipB.passCoordShip(board, 2, 3)).toBe("Already being used");
    expect(shipB.passCoordShip(board, 4, 4)).not.toBe("Already being used");
    expect(shipB.passCoordShip(board, 6, 3)).toBe("Already being used");
    expect(shipB.passCoordShip(board, 8, 3)).not.toBe("Already being used");
  });
});

import gameboard from "./gameboard";

const A = new gameboard();

test("getBoard() returns a 2D Array with 10 arrays and 10 rows", () => {
  A.getBoard();
  expect(A.array2D.length === 10).toBe(true);
});

test("The three methods should return 'true'", () => {
  A.array2D[5][6] = "missed shot";
  A.array2D[3][2] = "there is a ship";
  A.array2D[1][1] = "damaged ship";

  expect(A.isMissing(5, 6)).toBe(true);
  expect(A.isShip(3, 2)).toBe(true);
  expect(A.isDamagedShip(1, 1)).toBe(true);
});

test("isMissing() returns 'missed shot' if the given coordinates have their default value", () => {
  expect(A.isMissing(8, 9)).toBe(`missed shot`);
  expect(A.isMissing(3, 2)).toBe(false);
});

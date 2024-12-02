import gameboard from "./gameboard";

test("getBoard() returns a 2D Array with 10 arrays and 10 rows", () => {
  const A = new gameboard();
  A.getBoard();
  expect(A.array2D.length === 10).toBe(true);
});

test("The three methods should return 'true'", () => {
  const B = new gameboard();

  B.getBoard();

  B.array2D[5][6] = "missed shot";
  B.array2D[3][2] = "there is a ship";
  B.array2D[1][1] = "damaged ship";

  expect(B.isMissing(5, 6)).toBe(true);
  expect(B.isShip(3, 2)).toBe(true);
  expect(B.isDamagedShip(1, 1)).toBe(true);
});

test("isMissing() returns 'missed shot' if the given coordinates have their default value", () => {
  const C = new gameboard();

  C.getBoard();
  C.array2D[3][2] = "there is a ship";

  expect(C.isMissing(5, 6)).toBe(`missed shot`);
  expect(C.isMissing(3, 2)).toBe(false);
});

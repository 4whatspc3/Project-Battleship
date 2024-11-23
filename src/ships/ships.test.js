import ships from "./ships";

test("A new ships has an arbitrary length, but returns the default 'hits' and 'sunk' values", () => {
  const shipA = new ships(5);
  expect(shipA).toEqual({
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

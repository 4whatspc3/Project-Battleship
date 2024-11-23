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

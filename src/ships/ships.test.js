import ships from "./ships";

test("A new ships has an arbitrary length, but returns the default 'hits' and 'sunk' values", () => {
  const shipA = new ships(5);
  expect(shipA).toEqual({
    length: 5,
    hits: 0,
    sunk: false,
  });
});

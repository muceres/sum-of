const sumOf = require(".");

describe("sumOf tests", () => {
  test("if sumOf is called then it must be defined", () => {
    expect(typeof sumOf).toBe("function");
  });
});

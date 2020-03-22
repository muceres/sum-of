const sumOf = require(".");

describe("sumOf tests", () => {
  test("if sumOf is called then it must be defined", () => {
    expect(typeof sumOf).toBe("function");
  });

  test("if sumOf is called with an array of objets then the sum of the defined props is returned", () => {
    const wallets = [
      {
        euro: 12
      },
      {
        euro: 11
      },
      {
        euro: 10
      }
    ];

    expect(sumOf(["euro"], wallets)).toBe(33);
  });

  test("if sumOf is called with props that don't contain number then NaN is returned", () => {
    const wallets = [
      {
        euro: 12
      },
      {
        euro: "string"
      }
    ];

    expect(sumOf(["euro"], wallets)).toBe(NaN);
  });

  test("if sumOf is called with objects that includes some empty object then the some of the non empty objects is returned", () => {
    const wallets = [
      {
        euro: 12
      },
      {
        euro: 10
      },
      {}
    ];

    expect(sumOf(["euro"], wallets)).toBe(22);
  });

  test("if sumOf is called with only empty objects then 0 returned", () => {
    const wallets = [{}, {}, {}];

    expect(sumOf(["euro"], wallets)).toBe(0);
  });
});

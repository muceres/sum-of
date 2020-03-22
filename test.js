const dummyFunction = require(".");

describe("chainFns tests", () => {
  test("if dummyFunction is called then it must be defined", () => {
    expect(typeof dummyFunction).toBe("function");
  });
});

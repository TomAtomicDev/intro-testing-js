describe("Set of Tests", () => {
  test("case 1", () => {
    console.log("This is the case 1");
    expect(1 + 1).toBe(2);
  });
  test("case 2", () => {
    expect(1 + 4).toBe(5);
  });
  describe("Set of other tests", () => {
    test("case 3", () => {
      console.log("This is the case 3");
      expect(1 + 1).toBe(2);
    });
    test("case 4", () => {
      expect(1 + 4).toBe(5);
    });
  });
});

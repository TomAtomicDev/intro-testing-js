const Person = require("./06-person");

describe("Tests for person", () => {
  let person;
  beforeEach(() => {
    person = new Person("Tommy", 50, 1.72);
  });
  test("should return down", () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe("down");
  });

  test("Should return normal", () => {
    person.weight = 65;
    const imc = person.calcIMC();
    expect(imc).toBe("normal");
  });
});

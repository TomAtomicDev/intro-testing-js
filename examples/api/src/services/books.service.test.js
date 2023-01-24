const BookService = require("./books.service");

const mockSpyGetAll = jest.fn(); // es un espía pero jest nos obliba a llamar las variables con el prefijo mock

const MongoLibStub = {
  getAll: mockSpyGetAll,
  create: () => {},
};

jest.mock("../lib/mongo.lib.js", () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockSpyGetAll,
    create: () => {},
  }))
);

describe("Set for BookService", () => {
  let service;
  beforeEach(() => {
    service = new BookService();
    jest.clearAllMocks();
  });

  describe("Set for getBooks method", () => {
    test("Should return a list of books", async () => {
      //Arrange
      const fakeBooks = [
        {
          _id: 1,
          name: "Lord of the Rings",
        },
      ];
      mockSpyGetAll.mockResolvedValue([...fakeBooks]); // mockReturnValue()

      //Act
      const books = await service.getBooks({});
      console.log(books);
      //Asert
      expect(books.length).toBe(1);
    });

    test("Should return the name of 1st book", async () => {
      //Arrange
      const fakeBooks2 = [
        {
          _id: "e23XYZ",
          titleEnglish: "Lord of the Rings",
          titleSpanish: "Señor de los Anillos",
        },
      ];
      mockSpyGetAll.mockResolvedValue([...fakeBooks2]);

      //Act
      const books = await service.getBooks({});
      console.log(books);
      //Asert
      expect(books[0].titleEnglish).toBe("Lord of the Rings");
      expect(mockSpyGetAll).toHaveBeenCalled();
      expect(mockSpyGetAll).toHaveBeenCalledWith("books", {});
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
    });
  });
});

const { opCodeApplier } = require("./computer");

describe("opCodeApplier", () => {
  describe("correctly applies opCodes", () => {
    it("matches example A", () => {
      const arr = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
      const answer = [3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50];
      expect(opCodeApplier(arr)).toEqual(answer);
    });

    it("matches example B", () => {
      const arr = [1, 0, 0, 0, 99];
      const answer = [2, 0, 0, 0, 99];
      expect(opCodeApplier(arr)).toEqual(answer);
    });

    it("matches example C", () => {
      const arr = [2, 3, 0, 3, 99];
      const answer = [2, 3, 0, 6, 99];
      expect(opCodeApplier(arr)).toEqual(answer);
    });

    it("matches example D", () => {
      const arr = [2, 4, 4, 5, 99, 0];
      const answer = [2, 4, 4, 5, 99, 9801];
      expect(opCodeApplier(arr)).toEqual(answer);
    });
  });
});

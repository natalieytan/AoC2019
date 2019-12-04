const { meetsPart1Criteria, meetsPart2Criteria } = require("./passwordHelper");

describe("meetsPart1Criteria", () => {
  describe("correctly checks password criteria", () => {
    it("matches example A", () => {
      expect(meetsPart1Criteria(111111)).toBe(true);
    });

    it("matches example B", () => {
      expect(meetsPart1Criteria(223450)).toBe(false);
    });

    it("matches example C", () => {
      expect(meetsPart1Criteria(123789)).toBe(false);
    });
  });
});

describe("meetsPart2Criteria", () => {
  describe("correctly checks password criteria", () => {
    it("matches example A", () => {
      expect(meetsPart2Criteria(112233)).toBe(true);
    });

    it("matches example B", () => {
      expect(meetsPart2Criteria(123444)).toBe(false);
    });

    it("matches example C", () => {
      expect(meetsPart2Criteria(111122)).toBe(true);
    });
  });
});

const {
  manhattanDisatnceIntersectionFinder,
  fewestCombinedSteps
} = require("./manhattan");

describe("manhattanDisatnceIntersectionFinder", () => {
  describe("correctly finds manhattan distance", () => {
    it("matches example A", () => {
      const wire1 = "R8,U5,L5,D3".split(",");
      const wire2 = "U7,R6,D4,L4".split(",");
      expect(manhattanDisatnceIntersectionFinder(wire1, wire2)).toEqual(6);
    });

    it("matches example B", () => {
      const wire1 = "R75,D30,R83,U83,L12,D49,R71,U7,L72".split(",");
      const wire2 = "U62,R66,U55,R34,D71,R55,D58,R83".split(",");
      expect(manhattanDisatnceIntersectionFinder(wire1, wire2)).toEqual(159);
    });

    it("matches example C", () => {
      const wire1 = "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51".split(",");
      const wire2 = "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7".split(",");
      expect(manhattanDisatnceIntersectionFinder(wire1, wire2)).toEqual(135);
    });
  });
});

describe("fewestCombinedSteps", () => {
  describe("correctly finds manhattan distance", () => {
    it("matches example A", () => {
      const wire1 = "R8,U5,L5,D3".split(",");
      const wire2 = "U7,R6,D4,L4".split(",");
      expect(fewestCombinedSteps(wire1, wire2)).toEqual(30);
    });

    it("matches example B", () => {
      const wire1 = "R75,D30,R83,U83,L12,D49,R71,U7,L72".split(",");
      const wire2 = "U62,R66,U55,R34,D71,R55,D58,R83".split(",");
      expect(fewestCombinedSteps(wire1, wire2)).toEqual(610);
    });

    it("matches example C", () => {
      const wire1 = "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51".split(",");
      const wire2 = "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7".split(",");
      expect(fewestCombinedSteps(wire1, wire2)).toEqual(410);
    });
  });
});

const { fuelRequired, fuelForFuelRequired } = require("./fuelCalculator");

describe("fuelRequired", () => {
  describe("correctly calculates fuel based on mass", () => {
    it("is 2 for mass of 12", () => {
      expect(fuelRequired(12)).toEqual(2);
    });

    it("is 2 for mass of 14", () => {
      expect(fuelRequired(14)).toEqual(2);
    });

    it("is 654 for mass of 1969", () => {
      expect(fuelRequired(1969)).toEqual(654);
    });

    it("is 33583 for mass of 100756", () => {
      expect(fuelRequired(100756)).toEqual(33583);
    });
  });
});

describe("fuelForFuelRequired", () => {
  describe("correctly calculates fuel including fuel for fuel", () => {
    it("is 2 for mass of 12", () => {
      expect(fuelForFuelRequired(12)).toEqual(2);
    });

    it("is 2 for mass of 14", () => {
      expect(fuelForFuelRequired(14)).toEqual(2);
    });

    it("is 966 for mass of 1969", () => {
      expect(fuelForFuelRequired(1969)).toEqual(966);
    });

    it("is 50346 for mass of 100756", () => {
      expect(fuelForFuelRequired(100756)).toEqual(50346);
    });
  });
});

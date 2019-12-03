const fs = require("fs");
const path = require("path");

const { fuelRequired, fuelForFuelRequired } = require("./fuelCalculator");

const inputs = fs
  .readFileSync(path.join(__dirname + "/input.txt"))
  .toString()
  .split("\n")
  .map(Number);

const totalFuel = inputs.map(fuelRequired).reduce((acc, curr) => acc + curr);

console.log("Part 1:", totalFuel);

const totalFuelForFuel = inputs
  .map(fuelForFuelRequired)
  .reduce((acc, curr) => acc + curr);

console.log("Part 2:", totalFuelForFuel);

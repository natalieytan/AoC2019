const fs = require("fs");
const path = require("path");

const {
  manhattanDisatnceIntersectionFinder,
  fewestCombinedSteps
} = require("./manhattan");

const [wire1, wire2] = fs
  .readFileSync(path.join(__dirname + "/input.txt"))
  .toString()
  .split("\n");

const wire1arr = wire1.split(",");

const wire2arr = wire2.split(",");

const distance = manhattanDisatnceIntersectionFinder(wire1arr, wire2arr);

console.log(distance);

const steps = fewestCombinedSteps(wire1arr, wire2arr);

console.log(steps);

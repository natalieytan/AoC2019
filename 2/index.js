const fs = require("fs");
const path = require("path");

const {
  nounVerbApplier,
  opCodeApplier,
  nounVerbfinder
} = require("./computer");

const inputs = fs
  .readFileSync(path.join(__dirname + "/input.txt"))
  .toString()
  .split(",")
  .map(Number);

const state1202 = nounVerbApplier(inputs, 12, 2);

const programHaltedState = opCodeApplier(state1202);

const output = opCodeApplier(programHaltedState)[0];

console.log("Part 1: ", output);

const { noun, verb } = nounVerbfinder(inputs, 19690720);

console.log("Part 2: ", 100 * noun + verb);

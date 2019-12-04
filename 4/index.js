const { meetsPart1Criteria, meetsPart2Criteria } = require("./passwordHelper");

const LOWER_LIMIT = 359282;
const UPPER_LIMIT = 820401;

const totalDifferentPasswords = (lower, upper, criteriaCallBack) => {
  count = 0;
  for (let i = lower; i <= upper; i++) {
    if (criteriaCallBack(i)) {
      count += 1;
    }
  }
  return count;
};

const part1 = totalDifferentPasswords(
  LOWER_LIMIT,
  UPPER_LIMIT,
  meetsPart1Criteria
);

console.log("Part 1: ", part1);

const part2 = totalDifferentPasswords(
  LOWER_LIMIT,
  UPPER_LIMIT,
  meetsPart2Criteria
);

console.log("Part 2: ", part2);

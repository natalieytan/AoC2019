const isAscending = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

const containsConsecutivePair = arr => {
  for (let i = 1; i < arr.length - 1; i++) {
    let current = arr[i];
    let left = arr[i - 1];
    let right = arr[i + 1];
    let eitherIdentical = current === right || current === left;
    if (eitherIdentical) {
      return true;
    }
  }
  return false;
};

const containsExactConsecutivePair = arr => {
  let previous = null;
  let streak = 0;
  for (let number of arr) {
    if (number === previous) {
      streak += 1;
    } else if (streak === 1) {
      return true;
    } else {
      streak = 0;
    }
    previous = number;
  }
  return streak == 1;
};

const numberToNumArray = num =>
  num
    .toString()
    .split("")
    .map(Number);

const meetsPart1Criteria = num => {
  const arr = numberToNumArray(num);
  return isAscending(arr) && containsConsecutivePair(arr);
};

const meetsPart2Criteria = num => {
  const arr = numberToNumArray(num);
  return isAscending(arr) && containsExactConsecutivePair(arr);
};

module.exports = {
  meetsPart1Criteria,
  meetsPart2Criteria
};

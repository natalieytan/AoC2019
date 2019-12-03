const nounVerbApplier = (input, noun, verb) => {
  const arr = [...input];
  arr[1] = noun;
  arr[2] = verb;
  return arr;
};

const opCodeApplier = input => {
  const arr = [...input];
  const iterations = Math.floor(arr.length / 4);

  for (let i = 0; i < iterations; i++) {
    let chunk = 4 * i;
    let opCode = arr[chunk];
    let first = arr[arr[chunk + 1]];
    let second = arr[arr[chunk + 2]];
    let third = arr[chunk + 3];

    if (opCode == 99) {
      break;
    } else if (opCode == 1) {
      arr[third] = first + second;
    } else if (opCode == 2) {
      arr[third] = first * second;
    }
  }
  return arr;
};

const nounVerbfinder = (state, desired) => {
  for (let i = 0; i <= 99; i++) {
    for (let j = 0; j <= 99; j++) {
      let programState = nounVerbApplier(state, i, j);

      if (opCodeApplier(programState)[0] == desired) {
        return {
          noun: i,
          verb: j
        };
      }
    }
  }
};

module.exports = {
  nounVerbApplier,
  opCodeApplier,
  nounVerbfinder
};

const manhattanDistanceIntersectionFinder = (wire1, wire2) => {
  const wire1Set = new Set();
  const intersectionDistances = new Set();
  const wire1Coordinate = { x: 0, y: 0 };
  const wire2Coordinate = { x: 0, y: 0 };

  for (let instruction of wire1) {
    let { vector, scale } = parseInstruction(instruction);
    for (let i = 0; i < scale; i++) {
      wire1Coordinate.x += vector.x;
      wire1Coordinate.y += vector.y;
      wire1Set.add(`${wire1Coordinate.x},${wire1Coordinate.y}`);
    }
  }

  for (let instruction of wire2) {
    let { vector, scale } = parseInstruction(instruction);
    for (let i = 0; i < scale; i++) {
      wire2Coordinate.x += vector.x;
      wire2Coordinate.y += vector.y;
      let coordinate = `${wire2Coordinate.x},${wire2Coordinate.y}`;
      if (wire1Set.has(coordinate)) {
        intersectionDistances.add(Math.abs(wire2Coordinate.x) + Math.abs(wire2Coordinate.y));
      }
    }
  }

  return Math.min(...intersectionDistances);
};

const fewestCombinedSteps = (wire1, wire2) => {
  const wire1Set = new Set();
  const fewestCombinedSteps = new Set();
  const wire1CoordinateHash = {};
  const wire1Coordinate = { x: 0, y: 0 };
  const wire2Coordinate = { x: 0, y: 0 };
  let wire1Steps = 0;
  let wire2Steps = 0;

  for (let instruction of wire1) {
    let { vector, scale } = parseInstruction(instruction);
    for (let i = 0; i < scale; i++) {
      wire1Coordinate.x += vector.x;
      wire1Coordinate.y += vector.y;
      wire1Steps += 1;
      coordinateString = `${wire1Coordinate.x},${wire1Coordinate.y}`;
      if (!wire1Set.has(coordinateString)) {
        wire1Set.add(coordinateString);
        wire1CoordinateHash[coordinateString] = wire1Steps;
      }
    }
  }

  for (let instruction of wire2) {
    let { vector, scale } = parseInstruction(instruction);
    for (let i = 0; i < scale; i++) {
      wire2Coordinate.x += vector.x;
      wire2Coordinate.y += vector.y;
      wire2Steps += 1;
      let coordinate = `${wire2Coordinate.x},${wire2Coordinate.y}`;
      if (wire1Set.has(coordinate)) {
        fewestCombinedSteps.add(wire2Steps + wire1CoordinateHash[coordinate]);
      }
    }
  }

  return Math.min(...fewestCombinedSteps);
};

const parseInstruction = instruction => {
  const directionMap = {
    R: { x: 1, y: 0 },
    L: { x: -1, y: 0 },
    U: { x: 0, y: 1 },
    D: { x: 0, y: -1 }
  };

  const direction = instruction[0];
  const vector = directionMap[direction];
  const scale = parseInt(instruction.slice(-instruction.length + 1));
  return {
    vector,
    scale
  };
};

module.exports = {
  manhattanDistanceIntersectionFinder,
  fewestCombinedSteps
};

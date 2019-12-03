const fuelRequired = mass => parseInt(mass / 3) - 2;

const fuelForFuelRequired = mass => {
  if (fuelRequired(mass) <= 0) {
    return 0;
  }
  return fuelRequired(mass) + fuelForFuelRequired(fuelRequired(mass));
};

module.exports = {
  fuelRequired: fuelRequired,
  fuelForFuelRequired: fuelForFuelRequired
};

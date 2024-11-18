'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
  const arrayMod = [];
  for (const i of array) {
    if (!arrayMod.includes(i)) {
      arrayMod.push(i);
    }
  }
  return arrayMod;
};

module.exports = { unique };

'use strict';

const removeElements = (array, ...items) => {
  // Remove multiple items from array modifying original array
  for (const i of items) {
    if (array.indexOf(i) !== -1) array.splice(array.indexOf(i), 1);
  }
};

module.exports = { removeElements };

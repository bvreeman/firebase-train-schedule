'use strict';

const testArray = [1, 2, 3, 4, 5];

console.log('testArray', testArray);


const mappedArray = testArray.map(function(elem) {
  return elem + 1;
});

console.log('mappedArray', mappedArray);

const filteredArray = mappedArray.filter(function(elem) {
  return elem % 2 === 0;
});

console.log('filteredArray', filteredArray);

// using the zero in reduce function tells our accumulator where to start.
const reducedArray = filteredArray.reduce(function(acc, elem) {
  return acc + elem;
}, 0);

console.log('reducedArray', reducedArray);

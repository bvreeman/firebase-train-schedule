'use strict';

const testArray = ['Bob', 'Sally', 'June', 'Jake'];

// // runs the first element in the array

// // console.log(testArray[0]);

// // runs all of the items within the array
// testArray[0];

// for (let i = 0; i < testArray.length; i++) {
// //   console.log(testArray[i]);
// }

// let j = 0;

// while (j < testArray.length) {
// //   console.log(testArray[j]);
//   j++;
// }

// .forEach means for (let i = 0; i < testArray.length; i++)
// const newArray = [];

// testArray.forEach(function(element) {
//   const result = element + 1;
//   newArray.push(result);
//   console.log(result);
// });

// console.log(newArray);


// const newerArray = testArray.map(function(elem) {
//   return elem + 1;
// });

// console.log(newArray);


// .map and .forEach - difference - forEach executes everything in the array -
//  map does that but also returns a new array


//
//
// example of .forEach

testArray.forEach(function(element) {
  console.log(`${element} is super cool!`);
});

//
//
//


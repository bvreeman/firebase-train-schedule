'use strict';

// // expression
// const isEven = function(param) {
//   const result = param % 2 === 0;
//   // console.log(result);
//   return result;
// };

// const wellIsIt = isEven(10);
// console.log(wellIsIt);

// // Write a function called adder
// // accepts two argumnents
// // return the sum

// // call the function
// // assign it to a varible and log the the variable

// const adder = function(arg1, arg2) {
//   const result = arg1 + arg2;
//   return result;
// };

// const sum = adder(1, 2);
// console.log(sum);

const mathTeacher = {
  name: 'Josh',
  good: false,
  age: 33,
  experience: 7,
  adder: function(arg1, arg2) {
    const result = arg1 + arg2;
    return result;
  },
  subtractor: function(arg1, arg2) {
    return arg1 - arg2;
  },
};

const started = mathTeacher.subtractor(mathTeacher.age, mathTeacher.experience);

console.log(`${mathTeacher.name} started teaching when he was ${started}`);


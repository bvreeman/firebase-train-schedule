'use strict';

const useful = 'string';

function anotherFunction() {
  return 'some things';
}

const usefullStuff = anotherFunction();

const palindromeChecker = function(sentence) {
  const input = sentence.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  const result = sentence.split('').reverse().join('')
    .toLowerCase()
    .replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  // console.log(input);
  // console.log(result);
  console.log(input === result);
  // console.log(usefullStuff);
};


palindromeChecker('wow');
palindromeChecker('Was it a car or a cat I saw');
palindromeChecker('A man, a plan, a canal, Panama!');
palindromeChecker('This is a palindrome!');

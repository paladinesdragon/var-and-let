var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
  console.log(i);
}
console.log(printNumTwo()); //returns 3 from function instead of 2
//console.log(i); //returns value of i which is 3 instead of i being not defined

'use strict';
let printTwo;
for (let x = 0; x < 3; x++) {
  if (x === 2) {
    printTwo = function() {
      return x;
    };
  }
  console.log(x);
}
console.log(printTwo()); // returns 2 from function
//console.log(x); //returns x is not defined
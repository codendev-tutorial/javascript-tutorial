/*
 * JavaScript Tutorial
 * Lesson 8 - Math Object
 * abs() - floor() - ciel() - round() - random() - max() - min()
*/

var x = -1;
console.log('>> Value of x', x);

var y = Math.abs(x);
console.log('>> Abs value of -1', y);

// Generate a random number between 0 and 1
var z = Math.random();
console.log(z);

// Floor 0.7 to the nearest smaller integer
console.log(Math.floor(0.7));

// Ciel 0.3 to the nearest bigger integer
console.log(Math.ceil(0.3));

// Round 0.7 to the nearest decimal
console.log(Math.round(0.7));

// Round 0.3 to the nearest decimal
console.log(Math.round(0.3));

// Minimum Number in arguments
console.log(Math.min(1, 3, 2, 0, -1, -Infinity));

// Maximum number in arguments
console.log(Math.max(1, 2, 3, 4, 9));
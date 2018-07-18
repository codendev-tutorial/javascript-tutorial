/*
 * JavaScript Tutorial
 * Lesson 7 - Number & Number Methods
 * infinity - isFinite() - isNaN() - parseInt() - parseFloat()
*/

var x = 10;
var y = 20.5;

console.log('>> typeof 10', typeof x);
console.log('>> typeof 20.5', typeof y);

console.log(x + y);
console.log(x * y);
console.log(x - y);
console.log(x / y);

var z = "10";

console.log("number + string", x + z, typeof x + z);
console.log("string + number", z + x, typeof z + x);

console.log("number - string", x - z, typeof x - z);
console.log("string - number", z - x, typeof z - x);

console.log(Infinity, Infinity + 1);
console.log('>> 10 is finite', isFinite(10));
console.log('>> infinity is finite', isFinite(Infinity));

console.log('>> 20.5 is nan', isNaN(y));

var i = "10" + 10;
console.log(typeof i, typeof parseInt(i));
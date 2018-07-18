/*
 * JavaScript Tutorial
 * Lesson 5 - String & String Methods
 * length - concat() - toLowerCase() - toUpperCase() - startsWith() - endsWith() - indexOf() - lastIndexOf()
*/

var variableOne = "My name is";
console.log(typeof variableOne);
var statement = variableOne + " Mustafa";
console.log(">> Statement", statement);

var secondStatement = statement - " Mustafa";
console.log(">> Second Statement", secondStatement);
console.log(">> type of Second Statement", typeof secondStatement);

var firstName = "Mustafa";
var lastName = "Ahmed";

console.log('>> Number of characters in Mustafa', firstName.length);

var fullName = firstName.concat(lastName);
console.log('>> fullName', fullName);
console.log(typeof fullName);

var fullNameLowerCase = fullName.toLowerCase();
console.log('>> fullNameLowerCase', fullNameLowerCase);

var fullNameUpperCase = fullName.toLowerCase();
console.log('>> fullNameUpperCase', fullNameUpperCase);

console.log(">> Mustafa starts with (M)", firstName.startsWith('M'));
console.log(">> Mustafa ends with (M)", firstName.endsWith('M'));

console.log('>> Index of (M) in Mustafa', firstName.indexOf('M'));
console.log('>> Index of (a) in Mustafa', firstName.indexOf('a'));
console.log('>> Last index of (a) in Mustafa', firstName.lastIndexOf('a'));
/*
 * JavaScript Tutorial
 * Lesson 6 - String & String Methods
 * replace() - trim() - split() - charAt() - substring()
*/

var wrongFirstName = "       Austafa";
var lastName = "Ahmed";

console.log('>> wrongFristName', wrongFirstName);

var correctFirstName = wrongFirstName.replace('A', 'M');
console.log('>> correctFirstName', correctFirstName);

var firstName = correctFirstName.trim();
console.log('>> firstName', firstName);

var combinedMethods = wrongFirstName.replace('A', 'M').trim();
console.log('>> combinedMethods', combinedMethods);

var charactersArray = firstName.split('');
console.log(charactersArray);

var characterAtIndex3 = firstName.charAt(3);
console.log('>> character at index 3', characterAtIndex3);

var charactersArraySplitIndex3 = firstName.split(charactersArraySplitIndex3);
console.log(charactersArraySplitIndex3);

var subbedString = firstName.substring(3);
console.log('>> Sub string', subbedString);
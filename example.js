//var randnum = require('random-number-between'); // NOTE: This is the usual way to use this but for this example to run in this directory, it has been commented out and replaced with a relative path to index.js
var randnum = require('./index.js');
var rand = randnum(1, 10, 5);  // First number is minimum, second is maximum, third is optional times to repeat

/* In this example code, a random number between 1 and 10 will be added to an array 5 times
  Example output: [ 3, 7, 1, 4, 9 ]
*/

console.log(rand);

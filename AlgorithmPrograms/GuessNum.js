/* @purpose : Guess the number
* @author  : Sheetal Shamkant Bedarkar
* @version : 1.0
* @since   : 20/04/19
*/
var utility = require("../utility/util");
var read = require("readline-sync");
var N = process.argv[2];
var result = utility.findNumber(0, N);
console.log("Your number is = " + result);
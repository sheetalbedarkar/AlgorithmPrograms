/* @purpose : Days of the week
* @author  : Sheetal Shamkant Bedarkar
* @version : 1.0
* @since   : 20/04/19
*/
var utility = require("../utility/util");
var read = require("readline-sync");
var day = process.argv[2];
var month = process.argv[3];
var year = process.argv[4];
console.log("Day is "+utility.dayOfWeek(day,month,year));
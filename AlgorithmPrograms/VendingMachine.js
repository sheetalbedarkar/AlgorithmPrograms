/* @purpose : Vending Machine
* @author  : Sheetal Shamkant Bedarkar
* @version : 1.0
* @since   : 20/04/19
*/
var utility = require("../utility/util");
var read = require("readline-sync");
var arr = [1000, 500, 100, 50, 10, 5, 2, 1 ];
var amount = read.question("Enter the Amount ");
utility.findNumberOfNotes(arr,amount);
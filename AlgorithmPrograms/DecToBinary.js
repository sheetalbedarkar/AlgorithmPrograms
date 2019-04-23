/* @purpose :Decimal to binary conversion
* @author  : Sheetal Shamkant Bedarkar
* @version : 1.0
* @since   : 20/04/19
*/
var utility = require("../utility/util");
var read = require("readline-sync");
var num = read.question("Enter a number : ");
utility. toBinary(num);
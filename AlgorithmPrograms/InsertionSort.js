/* @purpose : Insertion Sort
* @author  : Sheetal Shamkant Bedarkar
* @version : 1.0
* @since   : 20/04/19
*/
var utility = require("../utility/util");
var read = require("readline-sync");
var size = read.question("Enter size of array elements ");
utility.getInsertionSort(size)
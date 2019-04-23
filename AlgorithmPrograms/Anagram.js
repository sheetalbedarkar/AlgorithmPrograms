/* @purpose : Anagram Strings
* @author  : Sheetal Shamkant Bedarkar
* @version : 1.0
* @since   : 20/04/19
*/
var utility = require("../Utility/Util")
var read = require("readline-sync")
var str1 = read.question("Enter first string :: ")
var str2 = read.question("Enter second string :: ")
utility.isAnagram(str1, str2)
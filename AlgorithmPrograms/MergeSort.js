var utility = require("../utility/util");
var read = require("readline-sync");
var num = read.questionInt("Enter the size of array  ");
var arr = [];
while (num != arr.length) {
    var number = read.questionInt("Enter the array element ");
    arr.push(number);
}
var l = 0;
var h = arr.length;
function merge() {
    utility.mergeSort(arr);
    console.log("Sorted array is : " + arr);
}

merge();
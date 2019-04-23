/* @purpose : Elapsed time for evvery Search and Sort method
* @author  : Sheetal Shamkant Bedarkar
* @version : 1.0
* @since   : 20/04/19
*/
var utility =require("../utility/util");
var read = require("readline-sync");
console.log("1. binarySearch method for integer");
console.log("2. binarySearch method for String");
console.log("3. insertionSort method for integer");
console.log("4. insertionSort method for String");
console.log("5. bubbleSort method for integer");
console.log("6. bubbleSort method for String");
console.log("7. exit");
var choice = 0;
var timeArray = [];
do {
    console.log();
    choice = read.question("Enter your choice:");
    switch (choice) {
        case "1":
                //binary search Integer
        var n = read.question("Enter no of elements of array:");
            var arr = [];
            console.log("Enter elements in int array:");

            for (let i = 0; i < n; i++) 
            {
                arr[i] = read.question();
            }
            
            var start = utility.currentTime();
                //console.log("start time " +start)
            var key = read.question("Enter element you want to search:");
            utility.bubbleSortInt(arr, n);
            console.log (arr);
                //console.log(utility.binarySearchInt(arr,key));

            if (utility.binarySeachInt(arr, key)) 
            {
                 console.log("Number found  "+key);
            }
            else
                console.log("Number Not found  " +key);
            var end = utility.currentTime();
            //console.log("end time" +end)
            var result = utility.elapsedTime(start, end);
            timeArray.push(result);
            //console.log(timeArray)
            console.log("\nTime taken for binary search: " + result  + " Millisecond.");
            break;

        case "2":
        //binary Search String
            var n = read.question("Enter no of elements of array:");
            
            var array = [];
            console.log("Enter elements in string array");

            for (let j = 0; j < n; j++) 
            {
                array[j] = read.question();
            }
            start = utility.currentTime();
            var keyStr = read.question("Enter String you want to search:");
            utility.bubbleSortStr(array, n);
            if (utility.binarySearchStr(array, keyStr)) 
            {
                console.log("String found  "+keyStr);
            }
            else
                console.log("String Not found  " +keyStr);
            end = utility.currentTime();
            result = utility.elapsedTime(start, end);
            timeArray.push(result);
            console.log("\nTime taken for binary search: " + result  + " Millisecond.");
            break;

        case "3":
        //insertion Sort Integer
            var nI = read.question("Enter no of elements of array:");
            start = utility.currentTime();
            var arrInt = [];
            console.log("Enter elements in int array:");

            for (let k = 0; k < nI; k++) 
            {
                arrInt[k] = read.question();
            }
            utility.insertionSortInt(arrInt, nI);
            end = utility.currentTime();
            result = utility.elapsedTime(start, end);
            timeArray.push(result);
            console.log("\nTime taken for insertion sort: " + result + " Millisecond.");
            break;

        case "4":
        //Insertion sort String
            var nS = read.question("Enter no of elements of array:");
            start = utility.currentTime();
            var arrStr = [];
            console.log("Enter elements in string array:");

            for (let p = 0; p < nS; p++) 
            {
                arrStr[p] = read.question();
            }
            utility.insertion(arrStr, nS);
            end = utility.currentTime();
            result = utility.elapsedTime(start, end);
            timeArray.push(result)
            console.log("\nTime taken for insertion sort: " +result / 1000  + " Millisecond.");
            break;

        case "5":
        //bubble sort Integer
            var nI1 = read.question("Enter no of elements of array:");
            start = utility.currentTime();
            var arrInt1 = [];
            console.log("Enter elements in int array:");
            
            for (let q = 0; q < nI1; q++) {
                arrInt1[q] = read.question();
            }
            
            
            utility.bubbleSortInt(arrInt1, nI1);
            end = utility.currentTime();
            result = utility.elapsedTime(start, end);
            timeArray.push(result)
            console.log("\nTime taken for bubble sort: " + result  + " Millisecond.");
            break;

        case "6":
        //Bubble Sort String
            var nS1 = read.question("Enter no of elements of array:");
            start = utility.currentTime();
            var arrStr1 = [];
            console.log("Enter elements in string array:");
            
            for (let r = 0; r < nS1; r++) 
            {
                arrStr1[r] = read.question();
            }
            
            utility.bubbleSortStr(arrStr1, nS1);
            end = utility.currentTime();
            result = utility.elapsedTime(start, end);
            timeArray.push(result);
            console.log("\nTime taken for bubble sort: " + result  + " Millisecond.");
            break;


        case "7":
        console.log("elapsed time performance in descending order:  ")
        timeArray.sort(function(a, b)
        {
            return b-a
        });
            console.log(timeArray);
        
        console.log("Program terminated");
        return false;
            // throw new console.error("Program terminated");
        break;
        
        default:
            choice = read.question("Wrong choice. Please select between 1 to 6:");

    }
} while (choice != 0);
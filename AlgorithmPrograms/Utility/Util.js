/****************************************************************************************************/
//  * @purpose :to deploy all the business logic
//  * @file    :util.js
//  * @author  :Sheetal Shamkant Bedarkar
//  * @version :1.0
//  * @since   :19/04/2019 
/***************************************************************************************************/

const readline = require('readline-sync');
module.exports = {
/************************ Anagram ****************************/
// * @Purpose :chech Whether tow strings are anagram or not
// * @param   :take string from user
/*************************************************************/
isAnagram(s1, s2)
{
    try
    {
        var format = /[a-zA-Z0-9]/
        var result;
        if(format.test(s1) && format.test(s2))
        {
            if(s1.length !== s2.length)
            {
                result = false;
            }
            var sortS1 = s1.toString().split("").sort().join("");
            var sortS2 = s2.toString().split("").sort().join("");
            result = sortS1 === sortS2;
            if(result == true)
            {
                console.log(`${s1} and ${s2} are ANAGRAMS..!!!`)
            }
            else
            {
                console.log(`${s1} and ${s2} are not ANAGRAMS..!!!`)
            }
        }
        else throw "Enter only letters or alphabets..!!"        
    }
    catch(e)
    {
        console.log(e)
    }
},
/*********************** Prime Numbers ************************/
isPrime(num)
{
    try
    {
        if(num == 0 || num == 1)
        {
            return false;
        }
        for(let i = 2; i < num; i++)
        {
            if(num % i == 0)
                return false;
        }
        return true;
    }
    catch(e)
    {
        console.log(e)
    }   
},
/*********************** Prime Numbers ************************/
// * @Purpose :Prime numbers from 0 to 1000
/*************************************************************/
findPrimeNumber()
{
    try
    {
        console.log("Prime number between 0 to 1000");
        for(let i = 0; i <=1000; i++)
        {
            if(this.isPrime(i))
                console.log(i)
        }
    }
    catch(e)
    {
        console.log(e)
    }
    
},
/************************** Prime Numbers are Palindrome or Anagram **********************************/
// * @Purpose - Function to find the prime numbers that are Anagram and Palindrome 
// * @param   :  Extending the above program to find the prime numbers that are Anagram and Palindrome.
/*****************************************************************************************************/
isNumberPalindrome(num)
{
    try
    {
        var str = "";
        num = num + "";
        for(let i = 0; i < num.length; i++)
        {
            str = num.charAt(i) + str;
        }
        if(str == num)
        {
            return true;
        }
        return false;
    }
    catch(e)
    {
        console.log(e)
    }
},
isAnagramPalindrome()
{
    console.log("Prime number in the range 0 to 1000 :: ");
    var arr = [];
    for(let i = 0; i < 1000 ; i++)
    {
        if(this.isPrime(i))
        {
            arr.push(i)
        }
    }
    for(let i = 0; i < 1000; i++)
    {
        for(let j = i + 1; j < arr.length; j++)
        {
            if(this.isAnagram(arr[i], arr[j]))
            {
                console.log(arr[i] + " and " + arr[j] + " are Anagram");
                if(this.isNumberPalindrome(arr[i]))
                {
                    console.log(arr[i] + " is Palindrome")
                }
                if(this.isNumberPalindrome(arr[j]))
                {
                    console.log(arr[j] + " is Palindrome")
                }
            }
        }
    }
},
/*********************************** Binary Search Integer *******************************************/
// * @purpose     : To search the number using binary search.
// * @param       : It accepts the input and searches for the given number.
// * @function    : A function to binary which accepts the input to find the number and print the result.
/*****************************************************************************************************/
binarySeachInt(arr, search)
{
    try
    {
        var low = 0;
        var high = arr.length - 1;
        while(low <= high)
        {
            var mid = low + Math.floor((high - low) / 2);
            if(Number(arr[mid]) == search)
            {
                return true;
            }
            else if(Number(arr[mid]) < search)
            {
                low = mid + 1;
            }
            else
            {
                high = mid - 1;
            }
            return false;
        }
    if(low > high) throw "Number is NOT FOUND..!!!!"
    }
    catch(e)
    {
        console.log(e)
    }

},
/*********************************** Binary Search String *******************************************/
// * @purpose     : To search the string using binary search.
// * @param       : It accepts the input and searches for the given number.
// * @function    : A function to binary which accepts the input to find the number and print the result.
/*****************************************************************************************************/

binarySearchStr(arr, search)
{
    try
    {
        arr.sort();
        console.log(arr)
        var low = 0;
        var high = arr.length - 1;
        while(low <= high)
        {
            var mid = low + Math.floor((high - low) / 2);
            if(arr[mid] === search)
                return true;
            else if(arr[mid] < search)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return false;
        if(low > high) throw "String is NOT FOUND...!!!"
    }
    catch(e)
    {
        console.log(e)
    }
    
},

/**************************************** Insertion Sort *********************************************/
// * @purpose     : Use Insertion Sort to sort the words in the String array.
// * @param       : It accepts the input from the user and sort the array using insertion sort.
// * @function    : Reads in strings from standard input and prints them in sorted order.
//                  Uses insertion sort.
/*****************************************************************************************************/
getInsertionSort(size)
{
    try
    {
        var arr = [];
        for(let i = 0; i < size; i++)
        {
            arr[i] = readline.question("Enter the string to sort :: ");
        }
        for(let i = 1; i < arr.length; i++)
        {
            var temp = arr[i];
            var j = i - 1;
            while(j >= 0 && arr[j] > temp)
            {
                console.log(arr);
                arr[j + 1] = arr[j]
                j = j - 1;
            }
            arr[j + 1] = temp;
        }
        console.log(arr);
    }
    catch(e)
    {
        console.log(e)
    }  
},
/*********************************** Insertion Sort String *********************************************/
// * @purpose     : Use Insertion Sort to sort the words in the String array.
// * @param       : It accepts the input from the user and sort the array using insertion sort.
// * @function    : Reads in strings from standard input and prints them in sorted order.
//                  Uses insertion sort.
/******************************************************************************************************/
searchWord()
{
    try
    {
        var arr = [];
        var search = readline.question("Enter a string to search :: ");
        const fs = require("fs");
        fs.readline("C:\Users\SHREE\Desktop\Javascript\AlgorithmPrograms\searchSample.txt", (err, data) =>
        {
            if(err) throw err;
            arr = data.toString.split(",");
            console.log(this.binarySearchStr(arr, search));
        })
    }
    catch(e)
    {
        console.log(e.message)
    }
},

/****************************************** Bubble Sort *************************************************/
// * @purpose : Reads in integers prints them in sorted order using Bubble Sort
// * @param   :read in the list ints
/*****************************************************************************************************/

getBubbleSort(size) {
    try {
        var arr = [];
        for (let i = 0; i < size; i++) {
            arr[i] = readline.question("Enter the elements = ");
        }
        for (let a = 0; a < arr.length; a++) {
            for (let b = a + 1; b < arr.length; b++) {
                if (arr[a] > arr[b]) {
                    var temp = arr[a];
                    arr[a] = arr[b];
                    arr[b] = temp;
                }
            }
        }
        console.log("Sorted elements are = " + arr);

    }
    catch (e) {
        console.log(e.message);
    }
},

bubbleSort(size) {
    for (let a = 0; a < size.length; a++) {
        for (let b = a + 1; b < size.length; b++) {
            if (size[a] > size[b]) {
                var temp = size[a];
                size[a] = size[b];
                size[b] = temp;
            }
        }
    }
    return size;
    // console.log("  [  "+size +"  ]  " );
},
/****************************************** Merge Sort *************************************************/
// * @purpose      : To get merge Sort of list of Strings. 
// * @param        : It accepts the input from the user and prints the result.
// * @function     : To Merge Sort an array, we divide it into two halves, sort the two halves
// *                 independently, and then merge the results to sort the full array.
/*****************************************************************************************************/
mergeSort(res) 
{
    try 
    {

        var n = res.length;
        if (n < 2) 
        {
            return;
        }
        var mid = Math.floor(n / 2);
        var left = [mid];
        var right = [n - mid];
        for (let i = 0; i < mid; i++) 
        {
            left[i] = res[i];
        }
        for (let j = mid; j < n; j++) 
        {
            right[j - mid] = res[j];
        }
        this.mergeSort(left);
        this.mergeSort(right);
        this.merge(left, right, res);
    } 
    catch (e) 
    {
        console.log(e.message);
    }

},

merge(arr, brr, crr) 
{
    try 
    {
        var i = 0; var j = 0;
        var k = 0;
        while (i < arr.length && j < brr.length) 
        {
            if (arr[i] <= brr[j]) 
            {
                crr[k] = arr[i]
                i++;
            }
            else 
            {
                crr[k] = brr[j];
                j++;
            }
            k++;
        }
        while (i < arr.length) 
        {
            crr[k] = arr[i];
            i++;
            k++;
        }
        while (j < brr.length) 
        {
            crr[k] = brr[j];
            j++;
            k++;
        }
        return crr;
    } 
    catch (e) 
    {
        console.log(e.message);
    }
},
/***************************************** Guess Number ***********************************************/
// * @purpose     : Print the intermediary number and the final answer
// * @param       : takes a command-line argument N, asks you to think of a number between 0 and N-1, 
//                  where N = 2^n, and always guesses the answer with n questions.
// * @function    : A function Print the intermediary number and the final answer
/*****************************************************************************************************/
findNumber(low, high) {
    try {
        var mid = low + Math.floor((high - low) / 2);
        var k;
        if (low < high) {
            if (low == high - 1) {
                k = readline.question("Is the number " + low + "  if yes press->yes " + " IF the number is high press->no" + " ");
                if (k == "yes")
                    return low;
                if (k == "no")
                    return high;
            }
            k = readline.question("Is the number in the range " + mid + "-" + high + " If yes press yes else press no" + " ");
            if (k == "yes")
                mid = this.findNumber(mid, high);
            if (k == "no")
                mid = this.findNumber(low, mid - 1);
        }
        return mid;
    }
    catch (e) 
    {
        console.log(e.message);
    }
},
/***************************************** Vending Machine ********************************************/
// * @purpose     : To calculate the minimum number of Notes as well as the 
// *                Notes to be returned by the Vending Machine as a Change.
// * @param       : It accepts the amount from the user and print the number of notes.
// * @function    : There is 1, 2, 5, 10, 50, 100, 500 and 2000 Rs Notes which can be 
// *               returned by Vending Machine and print the number of notes.
/*****************************************************************************************************/
findNumberOfNotes(arr, amount) {
    try 
    {
        var notes = 0
        for (let i = 0; i < arr.length; i++) 
        {
            if (amount / arr[i] >= 1) 
            {
                var c = Math.floor(amount / arr[i])
                notes = notes + c
                console.log(arr[i] + " notes are :" + c)
                amount = amount % arr[i]
            }
        }
        console.log("total number of notes :" + notes)
    }
    catch (e) {
        console.log(e.message);

    }

},
/****************************************** Days OF The Week *************************************************/
// * @purpose :prints the day of the week that date falls on. 
// * @param   :command-line arguments: m (month), d (day), and y (year).
/*****************************************************************************************************/
dayOfWeek(day, month, year) {
    try {
        if (!isNaN(day, month, year) && (0 < day && day < 32) && (0 < month && month < 13) && (999 < year && year < 10000)) 
        {
            var y0 = year - Math.floor((14 - month) / 12);
            var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
            var m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
            var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;


            switch (d0) 
            {
                case 0: return "Friday";
                case 1: return "Saturday";
                case 2: return "sunday";
                case 3: return "monday";
                case 4: return "Tuesday";
                case 5: return "Wednesday";
                case 6: return "Thrusday";
                default:
                    console.log("Plese try again ");
                    break;
            }

        }
    } catch (e) {
        console.log(e.message);
    }
},
/************************************* Tempreture Converter ******************************************/
// * @purpose :Converts the tempreture from celcius to fahrenheit or vice versa 
// * @param   :tempreture in celsius or fahrenheit
/*****************************************************************************************************/
tempConvertor() {
    try {
        console.log("Temprature Calculator : ");
        var choice = readline.question("Enter temprature in celsius or Fahrenheit  \n 1 for celsius\n 2 for Fahrenheit\n Enter your choice : ");
        var tempInFarient = 0;
        var tempInCelsius = 0;
        if (choice == 1) {
            tempInFarient = readline.question("Enter temp in fehrenheit : ");
            var celsius = (tempInFarient - 32) * 5 / 9;
            return celsius;
        } else if (choice == 2) {
            tempInCelsius = readline.question("Enter temp in celsius : ");
            var fahrenheit = ((tempInCelsius + 32) * 9 / 5);
            return fahrenheit;

        } else
            console.log("incorrect choice ");
    }
    //return -1;
    catch (e) {
        console.log(e.message);
    }
},
/****************************************** Monthly Payment *************************************************/
// * @purpose     : To calculate thye monthly payment.
// * @param       : It accepts the input from the command line argument and calculates the monthly 
// *                payment.
// * @function    : It reads in three command-line arguments P, Y, and R and calculates the monthly 
// *                payments you would have to make over Y years to pay off a P principal loan amount
// *                at R per cent interest compounded monthly
/*****************************************************************************************************/
findMonthlyPayment() {
    try {
        var principal = process.argv[2];
        var year = process.argv[3];
        var rate = process.argv[4];
        var payment = 0;
        var n = 12 * year;
        var r = (rate / (12 * 100));
        payment = (principal * r) / (1 - Math.pow((1 + r), -n)) * 100;
        console.log("Monthly payment is " + payment);
    } catch (e) {
        console.log(e.message);
    }

},
/************************************** Find square root *********************************************/
// * @purpose :Compute the square root of non negative number
// * @param   :take input
/*****************************************************************************************************/
findSqrt(num) 
{
    try 
    {
        var epsilon = Number.EPSILON;
        var c = num;
        var t = c;
        while (Math.abs(t - c / t) > epsilon * t) 
        {
            t = (c / t + t) / 2.0;
        }
        console.log("sqrt of number is " + t);
    } 
    catch (e) 
    {
        console.log(e.message);
    }
},
/****************************************** To Binary *************************************************/
// * @purpose :function toBinary that outputs the binary (base 2) representation of the decimal number typed as the input.
// *           It is based on decomposing the number into a sum of powers of 2.
// * @param   :take decimal input
/*****************************************************************************************************/
toBinary(num) {
    try {
        var temp = num;
        var string = "";
        while (num > .9) 
        {
            var result = Math.floor(num % 2);
            string = string + result;
            num = num / 2;
        }
        console.log("Binary value of given number : "+string);
        return string;
    } catch (e) {
        console.log(e.message);
    }
},
/****************************************** Swap Nibble *************************************************/
// * @Purpose : 1) Swap nibbles and find the new number.
// *            2) Find the resultant number is the number is a power of 2.
// * @param   : take number to perform operation
/*****************************************************************************************************/
swapBinary(num) {
    try 
    {
        // var bin =0
        var bin = this.toBinary(num);
        console.log(bin);
        while (bin.length < 8) 
        {
            bin = 0 + bin;
        }
        console.log(bin);
        var st = bin.substring(4, 8) + bin.substring(0, 4)
        console.log(st);
        var arr = st.split("");
        var sum = 0;
        console.log(arr);
        var c = 0;
        for (let i = arr.length - 1; i >= 0; i--) 
        {
            var s = 2 ** c;
            var s1 = arr[i] * s;
            sum = sum + s1;
            c++;

        }
        console.log(sum);
        var x = this.toBinary(sum);
        var arr2 = x.split("");
        var con = 0;
        for (let i = 0; i < arr2.length; i++) 
        {
            if (arr2[i] == 1) 
            {
                c++;
            }
        }
        if (con == 1) 
        {
            console.log("Number is power of 2");
        }
        else
            console.log("Not power of 2");

    } 
    catch (e) 
    {
        console.log(e.message);
    }
},


/********************************** Elapsed Time *******************************************/
// * @purpose :Print Elapsed time using StopWatch for Search and Sort Mat
// * @param   :search sort methods
/******************************************************************************************/
currentTime() {
    try {
        //to take current time in miliseconds
        var d = new Date();
        //var time =d.getTime();
        var time = d.getMilliseconds();
        return time;
    } catch (e) {
        console.log(e.message)
    }
},

elapsedTime(start, end) 
{
    try 
    {
        var elapsed = Math.abs(end - start);
        return elapsed;
    } 
    catch (e) 
    {
        console.log(e.message)
    }
},
insertionSortInt(arrInt, nI) {
    try {
        for (let i = 1; i < nI; i++) {
            var a = arrInt[i];
            var j = i - 1;

            //Loop till j is greater than or equal to 0 and arr[j] is greater than a             
            while (j >= 0 && arrInt[j] > (a)) 
            {
                //if above condtion is true then swap values
                arrInt[j + 1] = arrInt[j];
                j = j - 1;
            }
            arrInt[j + 1] = a;
        }
        //print the sorted array
        console.log("Sorted array is:");
        for (let k = 0; k < nI; k++) {
            console.log(arrInt[k] + " ");
        }
    } catch (e) {
        console.log(e.message)
    }
},

bubbleSortInt(arrInt1, nI1) {

    var temp;
    nI1 = arrInt1.length;
    console.log("Sorted array is:");
    try {
        //Loop to iterate through array
        for (let i = 0; i < nI1; i++) 
        {
            for (let j = i + 1; j < nI1; j++) 
            {
                //if arr[i] is greater than arr[j] then swap
                if (arrInt1[i] > arrInt1[j]) 
                {
                    temp = arrInt1[i];
                    arrInt1[i] = arrInt1[j];
                    arrInt1[j] = temp;
                }
            }
        }

        for (let k = 0; k < arrInt1.length; k++) 
        {
            console.log(arrInt1[k] + " ");
        }
    } 
    catch (e) 
    {
        console.log(e.message)
    }
},

bubbleSortStr(arrStr1, nS1) 
{
    var temp;
    nS1 = arrStr1.length;
    console.log("Sorted array is:");
    try {
        //Loop to iterate through array
        for (let i = 0; i < nS1; i++) 
        {
            for (let j = i + 1; j < nS1; j++) 
            {
                //if arr[i] is greater than arr[j] then swap
                if (arrStr1[i].localeCompare(arrStr1[j]) > 0) 
                {
                    temp = arrStr1[i];
                    arrStr1[i] = arrStr1[j];
                    arrStr1[j] = temp;
                }
            }
        }
        for (let k = 0; k < arrStr1.length; k++) 
        {
            console.log(arrStr1[k] + " ");
        }
    } 
    catch (e) 
    {
        console.log(e.message)
    }
},
insertion(arr, n) {
    try 
    {
        //Loop to iterate through array
        for (let i = 1; i < n; i++) 
        {
            var a = arr[i];
            let j = i - 1;

            //Loop till j is greater than or equal to 0 and arr[j] is greater than a       
            while (j >= 0 && arr[j] > a) 
            {
                //if above condtion is true then swap values
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = a;
        }
        //print the sorted array
        console.log("Sorted array is:");
        for (let k = 0; k < n; k++) 
        {
            console.log(arr[k] + " ");
        }
    } 
    catch (e) 
    {
        console.log(e.message)
    }
},
}
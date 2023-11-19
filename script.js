// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function range( start, end, increment ) {
    // This will become the answer
    var result=[];
    // Defines the increment between values within the string, if none, then increments by 1, also returns the result as an array
    if (increment == undefined)
    increment = 1;
    // the equation for defining how many loops necessary to calculate the amount of values necessary for the array
    let numLoops  = Math.abs((end-start)/ increment) + 1;
    // The equation to determine the values of the array
    for (var i = 0; i < numLoops; i++) {
    result.push(start);
    start+= increment;
}
    // returns the array of values for the string provided.
return result;
}
console.log(range(1,10))
// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55
// Development of the function
function sum(numArray) {
    //Holds the sum of the function
    var arrayTotal = 0
    //defines the number of loops dependent on the length of the array
   let numLoops = numArray.length
   // Loop
   for (var i = 0; i < numLoops; i++) {
    //add the index to the sum
    arrayTotal += numArray[i];
   }
   return arrayTotal;
}
console.log(sum(range(1,10)));
// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.
// Example output for reverseArray:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
// Example output for reverseArrayInPlace:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]
function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
}
return newArray;
}
console.log(reverseArray(["A", "B", "C"]))


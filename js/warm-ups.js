"use strict";

//Write a function called findAverage that takes in an array of integers representing grades and returns the average.
// Example input: [95, 74, 86, 100]
// Example output: 88.75 (edited)

var arrOfIntegers = [95, 74, 86, 100]
// var arrSum = arrOfIntegers.length


function findAverage() {
    var sum = arrOfIntegers.reduce((a, b) => a + b, 0);
    console.log(sum)

    var result = sum/arrOfIntegers.length || 0;
    return result;

}
findAverage(arrOfIntegers)


fu
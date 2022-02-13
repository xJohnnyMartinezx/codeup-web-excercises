"use strict";

//Break and Continue Exercise


var oddNumber = promptForOddNumberInRamge(1, 50);



oddNumber = parseInt(oddNumber);

console.log(typeof oddNumber);

var oddNumber = printOddNumInRangeWithSkip(1, 50, oddNumber);
function printOddNumInRangeWithSkip(low, high, skipNumber ) {
//    inclusive
    for(var i = low; i <= high; i++) {
        if (i === skipNumber || i % 2 === 0) {
            if (i === skipNumber) {
                console.log("This num was skipped");
            }
            continue;
        }
        console.log("This is an odd number: " + i);
    }


}

function promptForOddNumberInRamge(low,high) {
    //loop until user enters an odd number in the range
    var result;
    while (true) {
        var result = prompt("Enter an odd number from " + low + " to " + high);
        console.log(result);
        if (result !== null && result % 2 === 1 && result >= low && result <= high) {
            break;
        } else {
            alert("The number you entered is NOT odd, or either below or above the set limits. Please try again.");
        }
    }
    // console.log(result);
    return result;
}


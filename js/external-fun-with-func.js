"use strict";

// /* TODO: MINI-EXERCISE:
// *   -> Write a function named getName() which will return the result of the user inputting their name(s)
// *   -> Console log the invocation of getName() to ensure it works properly
// *   -> Now, write a function named showName(username).
// *       -> It takes in 'username' as an argument and alerts the user to their name
// *       -> Pass an invocation of getName() as an argument to the invocation of showName()
// *       -> showName() should be void function. That is, it should not return a value - only execute code
// *   -> Test to ensure your code is working as expected
// * */
//

// MINI-EXERCISES FROM SLACK:

    //EXCERCISE 1

var greeting = "Hi, what is your name?";

function getName() {
    return prompt(greeting);
}
// console.log(getName())

function showName() {
    alert("Hello " + getName() + "!");
}
showName()


    //EXCERCISE 2

function isLowerCase(letter) {
    if (letter == letter.toLowerCase()) {
    return true;
    } else {
        return false;
    }
}

console.log(isLowerCase("test"))

    //EXCERCISE 3

function double(n) {
    let result = n * 2;
    return result;
}

console.log(double(8))

    //EXCERCISE 4

function areIdentical(input1, input2) {
    if (input1 === input2) {
        return true;
    } else {
        return false;
    }
}
console.log(areIdentical("string","string"));



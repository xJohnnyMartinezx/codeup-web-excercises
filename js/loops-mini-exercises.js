"use strict";

//TODO: Use a while loop to output the numbers from 8-50

//All Numbers
let num = 8;
while (num <= 50) {
    console.log(num++);
}
console.log("The loops has ended.");


//Odd Numbers
var oddNum = 8;
while (oddNum  <= 50) {
    if(oddNum % 2 === 1) {
        console.log(oddNum);
    }
    oddNum++;
}
console.log("The loops has ended.")


//Do while loop Slack exercise
//
// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that they are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.


var numSpaces = 30;

do {
    console.log("there are " + numSpaces + " remaining");
    numSpaces -= 2
}while (numSpaces);

console.log("This parking lot is now full.");



//TODO: using prompt() and alert(), write a while loop that will continue to ask for the correct password until the
//  correct password is given.
let password = "codeUp";
let isCorrect = false;
let attempt = "";

while(!isCorrect) {

    attempt = prompt("Enter your password");
    isCorrect = (attempt === password);
    if (!isCorrect) {
        alert("The password you entered is incorrect");
    }
}
alert("Your Password is correct")
"use strict";

// TODO: Use a for loop to print the even numbers between 0 and 30, inclusive.
//  HINT: remember the remainder operator (modulo)



for (var i = 0; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log("These are the even nums between 0 and 30: " + i)
    }
}



// TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  -> If it's neither print "I'm not playing"
//  -> Print "marco polo" if it's divisible by 3 and 5.


for (var i = 1; i<= 40; i++) {
    //Print "macro" if divisible by 3.
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("i is: " + i)
        console.log("marco polo")
    } else if (i % 3 === 0) {
        console.log("i is: " + i)
        console.log("marco")
    } else if (i % 5 === 0) {
        console.log("i is: " + i)
        console.log("polo")
    } else {
        console.log("i is: " + i)
        console.log("I'm not playing")
    }

}
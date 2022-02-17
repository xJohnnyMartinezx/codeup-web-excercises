"use strict";


//Exercise 2

// Create function named "showMultiplicationTable" that take a number
function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + num * i)
    }
}
showMultiplicationTable(7)




//Exercise 3



for (var i = 1; i <= 10; i++) {
    var randomNum = Math.floor(Math.random() * (200 - 20 + 1) + 20);
    if (randomNum % 2 === 0) {
        console.log(randomNum + " is even.")
    } else if (randomNum % 2 !== 0) {
        console.log(randomNum + " is odd.")
    }

}
console.log(randomNum)



//Exercise 4
  //Solutiuon 1
var totalNumOfRows = 9
for (var i = 1; i <= totalNumOfRows; i++) {
    console.log((i + "").repeat(i));
}


//   //Experiment 1
// var output = ""
// for (var i = 1; i <= totalNumOfRows; i++) {
//     for (var j = 1; j <= i; j++) {
//         output += j;
//     }
//     console.log(output)
//     output = ""
// }
//


//Exercise 5

for (var i = 100; i >= 5; i--) {
    if (i % 5 === 0) {
        console.log(i);
    }
}



"use strict";

//While Loop Exercise

var i = 1;

while (i < 65536) {

        console.log(i *= 2);

}





//Do While Loop Exercise


var allCones = Math.floor(Math.random() * 50) + 50;
//Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5


do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    console.log(conesBought + " cones sold");
    console.log(allCones + " cones left");
        if (conesBought > allCones) {
            console.log("Sorry I only have " + allCones + " left, so I can't sell you " + conesBought + " cones.");
        } else {
                allCones -= conesBought;
            }
} while (allCones > 0);

console.log("Yes!!! I've sold all my cones. I can go home now. ");

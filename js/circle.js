(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            // TODO: return the proper value
            return Math.PI * Math.pow(this.radius, 2)

        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            if (doRounding === true) {
                return Math.round(this.getArea())
            } else {
                return this.getArea();
            }

            // console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
        }
    };
    console.log("Radius is: " + circle.radius);

    // log info about the circle
    console.log("Raw circle information is: " + circle.logInfo(false));
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number: " + circle.logInfo(true));
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    var newRadius = circle.radius = 5

    console.log("New Radius is: " + newRadius);

    // log info about the circle
    console.log("Raw circle information " + circle.logInfo(false));
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number "  + circle.logInfo(true));
    circle.logInfo(true);


})();

(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split("|")

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    planetsString = planetsArray.join("<br>");
    console.log(planetsString);


    function planetUl(arrOfPlanets) {
        var newString = "<ul>";
            for (var i =0; i < arrOfPlanets.length; i++) {
                newString += "<li>";
                newString += arrOfPlanets[i];
                newString += "</li>";
            }
            newString += "</ul>";
        return newString
    }

    console.log(planetUl(planetsArray))




   //  planetsString = planetsArray.join("\n")
   //
   //
   //
   //  console.log(planetsString)
   //
   //  console.log(typeof planetsString)
   //
   //  var planetListString = "Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune";
   //  var planetListArray = planetListString.split(",")
   //  console.log(planetListArray);
   //  planetListArray.push("</li></ul>")
   //  planetListArray.unshift("<ul><li>")
   //
   //  console.log(planetListArray)
   //
   // var newString = planetListArray.join("</li><li>")
   //  console.log(newString)








})();


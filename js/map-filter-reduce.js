"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//--------------Exercise 1-2----------------

// var moreThanTwoLanguages = users.filter(function(n){
//     return n.languages.length >= 3;
// })

var moreThanTwoLanguages = users.filter(n => n.languages.length >= 3);


// console.log(moreThanTwoLanguages)


//--------------Exercise 3----------------

var userEmail = users.map(n => n.email);

console.log(userEmail);


//--------------Exercise 4----------------


var totalYearsOfExp = users.reduce((total,years) => {
    return total + years.yearsOfExperience
}, 0);
console.log("total yrs of exp: " + totalYearsOfExp);

var averageYears = totalYearsOfExp/users.length;
console.log(averageYears)

//--------------Exercise 5----------------

// var longestEmail = userEmail.reduce()

// function countLetters(l) {
    const numOfChar = userEmail.split("");
    console.log(numOfChar)
    // const charCountObj = numOfChar.reduce(charCount, char) => {
    //
    // }

// }

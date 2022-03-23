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


// //--------------Exercise 1-2----------------
//
// // var moreThanTwoLanguages = users.filter(function(n){
// //     return n.languages.length >= 3;
// // })
//
// var moreThanTwoLanguages = users.filter(n => n.languages.length >= 3);
//
//
// console.log(moreThanTwoLanguages)
//
//
// //--------------Exercise 3----------------
//
// var userEmail = users.map(n => n.email);
//
// console.log(userEmail);
//
//
// //--------------Exercise 4----------------
//
//
// var totalYearsOfExp = users.reduce((total,years) => {
//     return total + years.yearsOfExperience
// }, 0);
// console.log("total yrs of exp: " + totalYearsOfExp);
//
// var averageYears = totalYearsOfExp/users.length;
// console.log(averageYears)
//
// //--------------Exercise 5----------------
//
// // var longestEmail = user.reduce((, ))
//
// // console.log(userEmail[0].length)
//
// let longestEmail = users.reduce((longest, user) => {
//     if (user.email.length > longest.length) {
//         longest = user.email;
//     }
//     return longest
// }, "")
// console.log(longestEmail)
//
//
//
// //--------------Exercise 6----------------
//
// // var userNames = users.reduce((strgOfNames, names) => {
// //     var nameStrg = names.name.split()
// //     return strgOfNames + nameStrg + " "
// //
// // }, "")
//
// var instructorString = users.reduce((resultStrg, user) => {
//     return resultStrg += user.name
// }, "You're instructors are: ")
// // console.log(typeof(userNames))
// console.log(instructorString)




let languages = users.reduce((listOfLanguages, user) => {
    // if (!listOfLanguages.includes(user))
    user.languages.forEach(function (lang) {
        if (!listOfLanguages.includes(lang)) {
            listOfLanguages.push(lang)
        }
    })
    return listOfLanguages
},[]);

console.log(languages)


// function pushUniqueLanguagesPerUser(user, listOfLanguages) {
//     user.languages.forEach(function (lang) {
//         if (!listOfLanguages.includes(lang)) {
//             listOfLanguages.push(lang)
//         }
//     })
//
// }
//
// console.log(pushUniqueLanguagesPerUser())


"use strict";

//Write a function called findAverage that takes in an array of integers representing grades and returns the average.
// Example input: [95, 74, 86, 100]
// Example output: 88.75 (edited)

// var arrOfIntegers = [95, 74, 86, 100]
// // var arrSum = arrOfIntegers.length
//
//
// function findAverage() {
//     var sum = arrOfIntegers.reduce((a, b) => a + b, 0);
//     console.log(sum)
//
//     var result = sum/arrOfIntegers.length || 0;
//     return result;
//
// }
// findAverage(arrOfIntegers)
//


//JS Object Warmup, pt 1:
// Create an object representing a person. It should have properties representing:
// names (an array of strings)
// date of birth
// occupation
// Hard code some values in that object, then log it and its properties to the console


// var person;
// person = {
//     names: ["Johnny", "Martinez"],
//     dob: "01/01/1988",
//     occupation: "Student"
// }
// console.log(person);
// console.log(person.names);
// console.log(person.names[0]);
// console.log(person.names[1]);
// console.log(person.dob);
// console.log(person.occupation);
//
// person.names.forEach((name)=> {
//     console.log(name);
// })
//
// var person2 = Object.create(person);
// person2["names"] = ["Ry", "Sutton"];
// person2["occupation"] = "intructor";
// person2.dob = "02.02.1994";
// console.log(person2);
// person2["dob"] = "02.03.1994";
// console.log(person2);


// function Person(name, occupation, dob) {
//     this.names = names;
//     this.occupation = occupation;
//     this.dob = dob;
//
//     var fakePerson = new Person("fakename", "fakework","01.01.1999")
//     console.log(fakePerson);
// }

//JS Object Warmup, pt 2:
// Create an object representing a person’s contact info. It should have:
// phone number
// street address
// state
// postal code
// email address
// Hard code some values in that object, then log it and its properties to the console
//
// var contactInfo = {
//     phone: "555-555-5555",
//     addressNumber: "123",
//     streetName: "Fake St.",
//     city: "Dallas",
//     state: "Texas",
//     zipcode: "85449",
//     email: "fakecontact@gmail.com"
// }
//
// console.log(contactInfo);
//
// //Defines the contactInfo object
// function ContactInfo(phone,addressNumber,streetName,city,state,zipcode,email) {
//     this.phone = phone;
//     this.addressNumber = addressNumber;
//     this.streetName = streetName;
//     this.city = city;
//     this.state = state;
//     this.zipcode = zipcode;
//     this.email = email;
//
//     var newContact = new ContactInfo("123-456-7899", "456", "Fake2 St.", "Dallas", "Texas", "89466", "fake2@gmail.com")
//     console.log(newContact)
//
// }


//////////////////////////////////////////////
//
// // Defines a contact info object
// function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress){
//     this.phoneNumber = phoneNumber;
//     this.streetAddress = streetAddress;
//     this.city = city;
//     this.state = state;
//     this.postalCode = postalCode;
//     this.emailAddress = emailAddress;
// }
// // Defines a person object
// function Person(names, occupation, dob, contactInfo) {
//     this.names = names;
//     this.occupation = occupation;
//     this.dob = dob;
//     this.contactInfo = contactInfo;
// }
// // makes a new person object instance (by invoking the constructor)
// let person2 = new Person(
//     ["Casey", "J", "Edwards"],
//     "Cat Herder / Firefighter",
//     "11.30.1989",
//     new ContactInfo(
//         '123.456.7890',
//         '123 Anywhere Ln',
//         'Beverly Hills',
//         'CA',
//         '90210',
//         'nope@no-no-no.no'));
//
// console.log(person2.contactInfo.emailAddress);


// var enterName = confirm("Would you like to enter a name?")
// if (enterName === true) {
//     var enterNameHere = prompt("Perfect, enter your first name here.")
// }

// function getNames() {
//     var namesArr = [];
//     var hasMoreNames = true;
//     while (hasMoreNames) {
//     //    get names
//         //    prompt for names
//         namesArr.push(prompt("Please enter you name."))
//         //if they want more names, keep looping, if not break the loop.
//         hasMoreNames = confirm("Would you like to enter another name?")
//     }
//
//     return namesArr
//
// }



// var arrOfLetters = ["s", "t", "a", "t", "b", "a", "b", "s"]
// var emptyArr= []
// arrOfLetters.forEach(letter => emptyArr.push(letter));
//
// console.log(emptyArr);

// Casey Edwards  9:07 AM
//     :js: Warmup: Create a function which returns true if the given argument is a number, false if it is not a number

// function isNumber(input) {
//     if (!isNaN(input)) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
//
// console.log(isNumber("number"));
// console.log(isNumber(23));
// console.log(isNumber([23,12,405,55]));
// console.log(isNumber(false));
// console.log(isNumber(true));
// console.log(isNumber({key: "value", key2: "value2"}));



//2/28/2022 WARMUP

// Warmup: Write a function called removeAll that takes two parameters.
//     One that represents an array and another that represents a value to be removed from that array.
//     When called this function should return an array with all the values of the original array except the specified value to be removed.
//     ex:

var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

// function removeAll(param1, param2) {
//     for (let i = 0; i < bugs.length; i++) {
//         if (i === param2) {
//             bugs.slice(param2);
//         }
//         console.log(i);
//         console.log(bugs);
//     }
// }

// var result = bugs.slice(param2);
//     console.log(result);
//     return result;

// }

// function removeAll(param1, param2) {
//
//     var newArr = [];
//
//     bugs.forEach(function (bug){
//         if (param2 !== bug) {
//             newArr.push(bug);
//         }
//     });
//     return newArr;
//
// }
// var newArr = []
//
// for (let i = 0; i < bugs.length; i++) {
//     if (param2 === bugs[i]) {
//
//         continue;
//     }
//     newArr.push(bugs[i]);
// }
//     return newArr;
// }
//
//
//
//
// console.log(removeAll(bugs, "ant"));

// // should print
// ['mosquito', 'scorpion', 'mosquito', 'typo', 'reference error', 'type error']
//




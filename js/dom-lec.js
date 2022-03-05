// get the thing
let navContent = document.getElementById("navContent");

// log the thing to make sure you got the thing
// console.log(navContent);

console.log(navContent.children);

// create an element
let nameElement = document.createElement("p");

// get the data and set it to the text of the new element
nameElement.innerText = getGitHubInfo().name;
nameElement.style["color"] = 'white';
console.log(nameElement)

// TODO: Add nameElement to the DOM - specifically in between the GitHub Logo and the ul on the navbar


var element = document.getElementById("navContent");
// console.log(element)


// element.appendChild(nameElement)
var newElement = element.insertBefore(nameElement, element.children[1])

newElement.style.width = "15rem"
newElement.style.margin = "0"
newElement.style.marginTop = "1.5rem"






// PRETEND THIS IS AN API CALL ACROSS THE INTERWEBS
function getGitHubInfo(){
    return {
        name: "vegetasrevenge"
    };
}
"use strict";


// gitUserData()
gitUserLastCommit()
// dateOfLastCommit()
// populateHTML()

// function gitUserData() {
//
//     fetch(`https://api.github.com/users/xJohnnyMartinezx/events`, {headers: {'Authorization': `${GIT_KEY2}`}})
//         .then(response => response.json())
//         .then(userData => dateOfLastUpdate(userData))
//         .catch(error => console.error(error));
// }

function gitUserLastCommit() {

   return fetch(`https://api.github.com/repos
/xJohnnyMartinezx/johnny-martinez/commits`, {headers: {'Authorization': `${GIT_KEY2}`}})
        .then(response => response.json())
        // .then(commitData => console.log(commitData))
        .then(commitData => populateHTML(dateOfLastCommit(commitData)))
        .catch(error => console.error(error));
}


//
// function dateOfLastUpdate(userData) {
//    var userLastCommit = userData[0].created_at;
//     console.log(userLastCommit);
//     var convertedDate = userLastCommit.substring(0,10)
//     console.log(convertedDate);
// }
function dateOfLastCommit(commitData) {
    console.log(commitData);
    var userLastCommit = commitData.commit.author.date;
    console.log(userLastCommit);
    var convertedDate = userLastCommit.substring(0, 10)
    console.log(convertedDate);
    return convertedDate;

}

function populateHTML(date) {

    var html = "";
    let commit = dateOfLastCommit(date)
    console.log(commit)
    $(document).ready(function (){

    //    language=HTML
    html += `
        <div>
            <h1>${commit}</h1>
        </div>
    `
    return html
    })
}



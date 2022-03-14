"use strict";

$(document).ready(function () {

    // //select elem(s) to apply listner
    // $("main div:first-child").hover(function(){
    //     //get the content from the hover elem
    //     let content = $(this).html();
    //     //set the content of a different element
    //     $("main div:nth-child(3)").html(content);
    // })

//     var originalColor;
// //    select elements to apply listener
//     $("main div:first-child").hover(function() {
// //    get the content
//         originalColor = $(this).css("background-color")
//         $(this).css("background-color", "green");
//     }, function (){
//         $(this).css("background-color", "originalColor")



//         if ($(this).css("background-color") === "rgba(0, 0, 0, 0)"){
//             $(this).css("background-color", "green")}
//         else {
//             $(this).css("background-color", "rgba(0, 0, 0, 0)")
//         }
//     })


    $("#user-input").keyup(function (){
        var dInput = this.value;
        console.log(dInput)
        $("#user-output").text(dInput)
    })

    // $("#user-input").keyup(function (){
    //     var dInput = this.val();
    //     console.log(dInput)
    //
    // })

})
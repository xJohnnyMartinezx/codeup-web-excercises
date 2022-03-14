"use strict";

$(document).ready(function (){
    //---------------1---------------
    // console.log($("main:nth-child(2)").find())

    $("main:first-child").dblclick(function (){
        alert("BOX DOUBLE-CLICKED!")
    })


    // ---------------2---------------
    $("#dark-mode-btn").click(function (){
        $("body").toggleClass("dark-mode")
        })


    //---------------3---------------
    // console.log($("#uppercase").text().toLowerCase())

    $("#uppercase").hover(function () {
        var contents = $("#uppercase").text().toLowerCase()
        $("#lowercase").text(contents)
    }, function () {
        $("#lowercase").text("")
    })



    //---------------4---------------
   //  // console.log($("#counter").val())
   // var counter = $("#counter").text()
   //  setInterval("counter+=1", 1000); {
   //      $("#counter").append(counter)
   //  }

    function updateCounter() {
        var counter = $("#counter").text();
            counter++;
        $("#counter").text(counter);
    }
    setInterval(function (){
        updateCounter();
    }, 1000);






    //---------------5---------------



    $("#list-chars-btn").click(function (){
        $("#characters-list").append("<li>input</li>")
        $("#characters").keyup(function (){
            var input = this.value
            console.log(input)
    })
    })




    // $("#user-input").keyup(function (){
    //     var dInput = this.value;
    //     console.log(dInput)
    //     $("#user-output").text(dInput)
    // })


})
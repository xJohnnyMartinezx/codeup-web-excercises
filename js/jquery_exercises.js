"use strict";

$(document).ready(function() {


  // $(".codeup").css("border", "solid red 1px")

    // $("ul>li").css("font-size", "20px")

    // $("h1, p, li").css("background-color", "yellow")

    // var contents = $("h1").text()
    // alert(contents);

//    -----------jQuery mouse events exercises-----------

    $("h1").click(function () {

        if ($(this).css("background-color") === "rgba(0, 0, 0, 0)"){
            $(this).css("background-color", "green")}
        else {
            $(this).css("background-color", "rgba(0, 0, 0, 0)")
        }
    })

    $("div>p").dblclick(function (){
        $(this).css("font-size", "18px")
    })

    $("ul>li").hover(function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        })

});


//-------------keyboard events--------------------

$("#search").keyup(function (e) {
    console.log(e.key)


})

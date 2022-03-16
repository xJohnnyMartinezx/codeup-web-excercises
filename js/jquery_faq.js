"use strict";

$(document).ready(function (){


    $("body > dl > dd").addClass("invisible")

    $(".invisible").text()

    $(".invisible").css("visibility", "hidden")


    $("#toggle").click(function () {

           if ($(".invisible").attr("style")) {
               $(".invisible").removeAttr("style")
           }else {$(".invisible").css("visibility", "hidden")}

    })


    // $("#hl-toggle > li").click(function () {
    //     $(this).toggleClass("yellow-bg")
    //
    //     if ($(this).hasClass("yellow-bg") === true) {
    //         $(this).removeClass("#yellow-bg")
    //     }
    // })





})
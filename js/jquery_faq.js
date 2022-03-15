"use strict";

$(document).ready(function (){


    $("body > dl > dd").addClass("invisible")

    var content = $(".invisible").text()

    var visible = $(".invisible").css("visibility", "hidden")


    $("#toggle").click(function () {
            // $(visible).toggleClass("invisible")
        // if($(".invisible").attr("style") === true) {
           if ($(".invisible").attr("style")) {
               $(".invisible").removeAttr("style")
           }else {$(".invisible").css("visibility", "hidden")}
        // }

    })


    // $("#hl-toggle > li").click(function () {
    //     $(this).toggleClass("yellow-bg")
    //
    //     if ($(this).hasClass("yellow-bg") === true) {
    //         $(this).removeClass("#yellow-bg")
    //     }
    // })





})
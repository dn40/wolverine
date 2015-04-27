$(document).ready(function() {

    $(".button1").click(function() {

        var array = ["steve", "jerry", "mike", "tom"];
        for (i = 0; i < array.length; i++) {
            console.log(array[i]);
        }

    });



    // For Loop logs 1-10 selected by it's class//

    $(".button2").click(function() {
        var i = 0;
        for (i = 1; i < 11; i++) {
            console.log(i);
        }
    });


    // Create an element you can hover on your page, when hovered it changes to purple//

    $(".button3").css("color", "blue");

    $(".button3").hover(function() {
        $(this).css("color", "purple");
        $(this).addClass("mouseon");
    });

    $(".button").mouseout(function() {
        $(this).removeClass("mouseon");
    });



    // Create a list of items on your page you can iterate through using the Each function//
    $(".lists").hide();

    $(".button4").click(function() {
        $("li").each(function(i) {
            console.log(i + " : " + $(this).text());
        });
        $(".lists").show();
    });










});

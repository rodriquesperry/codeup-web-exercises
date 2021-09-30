"use strict";

$('h1').click(() => {
    $('h1').css('background-color', "#cd9575");
});


$('p').dblclick(() => {
    //Use $(this).css('font-size', '18px') for multiple paragraphs.
    // Will only change the one clicked on at a time
    $('p').css('font-size', '18px');
});

$('li').hover(
    function()  {
        $(this).css('color', '#ff0000');
    },
    function() {
        $(this).css('color', 'inherit');
    }
);




"use strict";

$('h1').click(() => {
    $('h1').css('background-color', "#cd9575");
});


$('p').dblclick(() => {
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


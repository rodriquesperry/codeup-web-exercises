"use strict";


$('button').click((e) => {
    e.preventDefault();
    $('dd').toggleClass('invisible');
})

$('dt').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('highlight');
});



"use strict";


$('#showMore').click((e) => {
    e.preventDefault();
    $('dd').toggleClass('invisible');
})

$('dt').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('highlight');
});

$('#highlightButton').click(function(e) {
   $('ul').each(function(index, element) {
       $(element).children().last().css('background-color', '#ffff00');
   })
});

$('h3').click(function(e) {
    $(this).next().children().css('font-weight', 'bold');
});

$('li').click(function(e) {
   $(this).parent().children().first().css('color', 'blue');
});


"use strict";


$('#showMore').click(function(e) {
    e.preventDefault();

    $('dd').toggleClass('invisible');

    if ($('dd').hasClass('invisible')) {
        $('#showMore').html('Show Content');
    } else {
        $('#showMore').html('Hide Content');
    }
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


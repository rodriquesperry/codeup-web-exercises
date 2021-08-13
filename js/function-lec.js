(function () {
// Define named function
console.log('Welcome to functions!');
function sayHello() {
    console.log('Hello!');
}

console.log('In the file after creating the sayHello function.');

sayHello();

// Define an anonymous function
var sayHowdy = function() {
    console.log('Howdy!');
}
sayHowdy();

// Define an arrow function
var sayHowdy2 = () => console.log('Howdy Again!');
sayHowdy2();

// Arguments and Parameters
function add(x, y) {
    return x + y;
}
console.log('add(2, 3) ' + add(2, 3));

function subtract(x, y) {
    return x - y;
}

// Scope
var instructor = 'Douglas';
var day = 'Friday';


function tellTheDay() {
    return 'Tell ' + instructor + ' it\'s ' + day + '!';
}

// Local variables inside a function
function greeting() {
    var username = 'Rodriques';
    return 'Hi, ' + username;
}
console.log(greeting());

function checkDay() {
    var day = 'Monday';
    return day;
}

console.log('It\'s ' + checkDay());
}) ();



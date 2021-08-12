"use strict";

console.log("Hello from external JavaScript.");
alert('Welcome to my Website!');

let favColor = prompt("What is your favorite color?");
alert("Great, " + favColor + " is my favorite color too.");

let movie1 = prompt("How many days are you keeping movie 1?");
let movie2 = prompt("How many days are you keeping movie 2?");
let movie3 = prompt("How many days are you keeping movie 3?");

let total = (parseInt(movie1) + parseInt(movie2) + parseInt(movie3)) * 3;
alert ("Your total is $" + total);

let fb = prompt("How many hours did you work at Facebook?");
let goog = prompt("How many hours did you work at Google?");
let amz = prompt("How many hours did you work at Amazon?");

let payCheck = ((parseInt(fb) * 350) + (parseInt(goog) * 400) + (parseInt(amz) * 380));
alert ("Your total pay is $" + payCheck);

let scheduleConflict = false;
let notFull = true;
let decision = (notFull === true && !scheduleConflict === true) ? "student is enrolled" : "Please Enroll first";
alert(decision);

let nonMem = prompt('How many items are you purchasing?');
let premMem = confirm("Are you a premium member?");

let notExpired = true;

let productOffer = (nonMem >= 3 && notExpired) || premMem === true ? alert("You qualify for a product offer") : alert("Become a premium member for instant discounts or buy " +(3 - nonMem)+ " more items");


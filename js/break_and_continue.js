
let oddNumber = ""
while (true) {
   oddNumber = prompt("Pick an odd number between 1 and 50.");

   if (oddNumber % 2 === 1 && oddNumber <= 50 && !isNaN(oddNumber)) {
       break;
   }
}
 for (let i = 1; i <= 50; i++) {
     if (i === parseInt(oddNumber)) {
         continue;
     }
     if (i % 2 === 1) {
         console.log("Here is an odd number: " + i);
     }
 }


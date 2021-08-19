
let oddNumber = ""
while (true) {
   oddNumber = prompt("Pick an odd number between 1 and 50.");

   if (oddNumber % 2 === 1 && oddNumber <= 50 && !isNaN(oddNumber)) {
       break;
   }
}



function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num * i);
    }
}
showMultiplicationTable(7);

for (let i = 1; i < 10; i++ ) {
    let rando = Math.floor(Math.random() * 100) + 20;
    if (rando % 2 === 0) {
        console.log("Your random number: " + rando + " is even");
    } else {
        console.log("Your random number: " + rando + " is odd");
    }
}


function pyramid() {
    for (let i = 1; i < 10; i++) {
        console.log(i.toString().repeat(i));
    }
}
pyramid();

for (let i = 100; i >= 5; i--) {
    if (i % 5 === 0) {
        console.log(i);
    }
}


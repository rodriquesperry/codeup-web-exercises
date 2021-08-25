

const rollSixSided = (number) => {
    for (let i = 1; i <= number; i++) {
        let die= Math.floor(Math.random() * 6) + 1;
        console.log("You rolled a " + die);
    }
}
rollSixSided(8);

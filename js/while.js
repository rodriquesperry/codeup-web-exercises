
const multiplyByTwo = num => {
    while (num < 65536) {
        num = num * 2;
        console.log(num);
    }
}
multiplyByTwo(2);


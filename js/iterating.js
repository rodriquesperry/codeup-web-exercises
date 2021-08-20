(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ["Timothy", "Jacob", "John", "Mark"];
    /**
     * TODO:
     * Create a lo
     * .
     */
    console.log(names.length);
    console.log("--------------------");
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log("--------------------");
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < names.length; i++) {
        console.log("This is the name from a for loop: " + names[i]);
    }
    console.log("--------------------");
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    // names.forEach(name => console.log("This is a name from a forEach: " + name ));
    // console.log("--------------------");

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    // function first(array) {
    //     console.log(array[0]);;
    // }
    //
    // function second(array) {
    //     console.log(array[1]);;
    // }
    //
    // function last(array) {
    //     console.log(array[array.length - 1]);;
    // }
    // first([1, 2, 3, 4, 5]);
    // second([1, 2, 3, 4, 5]);
    // last([1, 2, 3, 4, 5]);

})();

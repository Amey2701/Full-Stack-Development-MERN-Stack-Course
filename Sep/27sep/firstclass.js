// First-Class Functions in JavaScript

// 1. Functions stored in variables
const greet = function(name) {
    return "Hello " + name;
};
console.log(greet("Rahul")); // Hello Rahul

// 2. Functions passed as arguments
function processUser(name, callback) {
    return callback(name); // Calls the callback with
    //  "name"
}
console.log(processUser("Rohan", greet)); // Hello Rohan

// 3. Functions returned from another function
function multiplier(factor) {
    return function(number) {
        return number * factor; // Remembers factor 
        // (closure + first-class)
    };
}

const double = multiplier(2); // Returns function with 
// factor=2
const triple = multiplier(3); // Returns function with 
// factor=3

console.log("Double:", double(5)); // 10
console.log("Triple:", triple(5)); // 15

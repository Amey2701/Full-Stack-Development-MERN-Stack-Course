// Closure Example
function outer() {
    let count = 0; // Local variable (private to outer)

    // Inner function forms a closure by "remembering" outer's 
    // variable
    return function inner() {
        count++; // Uses outer's variable
        return count; // Returns updated count
    };
}

let counter = outer(); // outer() is executed, returns inner()

console.log("Closures Example:");
console.log(counter()); // 1 (remembers count)
console.log(counter()); // 2
console.log(counter()); // 3


// Another Closure Example
function greet(message) { // Outer function with parameter
    return function(name) { // Inner function remembers message
        return `${message}, ${name}!`; // Uses outer variable
    };
}

const sayHello = greet("Hello"); // Fixes "message" as "Hello"
console.log(sayHello("Rahul"));  // "Hello, Rahul!"
console.log(sayHello("Rohan"));  // "Hello, Rohan!"

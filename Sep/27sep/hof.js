// Higher Order Functions (HOF) Examples

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map() is HOF - takes a function as an argument
let doubled = numbers.map(n => n * 2);
console.log("Doubled Numbers:", doubled); // [2, 4, 6, 8, 10]

// filter() is also HOF - takes a function
let evens = numbers.filter(n => n % 2 === 0);
console.log("Even Numbers:", evens); // [2, 4]

// Custom Higher Order Function
function operate(a, b, fn) {
    return fn(a, b); // Calls callback function with arguments
}

console.log("Custom HOF:");
console.log(operate(5, 3, (x, y) => x + y)); // 8 (addition)
console.log(operate(5, 3, (x, y) => x * y)); // 15 (multiplication)

// Pure Function Example
// - Always same output for same input
// - No side effects
function sum(a, b) {
    return a + b;
}

console.log("Pure Function:");
console.log(sum(2, 3)); // 5
console.log(sum(2, 3)); // 5 (same input, same output)

// Impure Function Example
let count = 0; // External variable (state)

function add(num) {
    count += num; // Modifies external variable -> side 
    // effect. count = count + num
    return count; // Output depends on previous state
}

console.log("Impure Function:");
console.log(add(1)); // 1
console.log(add(1)); // 2 (different output, same input)
console.log(add(1)); // 3

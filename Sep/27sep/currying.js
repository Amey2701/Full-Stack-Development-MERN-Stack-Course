// Normal function with multiple arguments
function meeeee(a, b, c) {
    return a + b + c;
}
console.log("Normal Add:", meeeee(1, 2, 3)); // Direct call

// Curried version (function returning function)
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c; // Each step takes one argument
        };
    };
}
console.log("Curried Add:", curriedAdd(1)(2)(3)); // Nested calls

// Infinite Currying Example
function infiniteAdd(a) {
    return function(b) {
        if (b !== undefined) { // If next argument exists
            return infiniteAdd(a + b); // Recursive call with 
            // updated sum. => c
        }
        return a; // If no argument, return result
    };
}

console.log("Infinite Currying:", infiniteAdd(1)(2)(3)(4)(5)(8)(5)()); // 23


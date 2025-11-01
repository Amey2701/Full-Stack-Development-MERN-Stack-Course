// =============================
// Truthy Values in JavaScript
// =============================

// In JavaScript, values that evaluate to true inside a boolean 
// context (like if conditions) are called TRUTHY.

// true is truthy
if (true) console.log("Truthy: true");  
// Output: Truthy: true

// non-empty string is truthy
if ("Hello") console.log("Truthy: non-empty string");  
// Output: Truthy: non-empty string

// even a string with only spaces counts as truthy (non-empty string)
if (" ") console.log("Truthy: space string");  
// Output: Truthy: space string

// empty array [] is truthy, even though it's "empty"
if ([]) console.log("Truthy: empty array");  
// Output: Truthy: empty array

// empty object {} is also truthy
if ({}) console.log("Truthy: empty object");  
// Output: Truthy: empty object

// functions are objects in JS → hence always truthy
if (function(){}) console.log("Truthy: function");  
// Output: Truthy: function

// Date object is truthy since it’s also an object
if (new Date()) console.log("Truthy: Date object");  
// Output: Truthy: Date object

// any non-zero number is truthy
if (-5) console.log("Truthy: negative number");  
// Output: Truthy: negative number

if (42) console.log("Truthy: positive number");  
// Output: Truthy: positive number

// non-zero BigInt is truthy
if (10n) console.log("Truthy: BigInt value");  
// Output: Truthy: BigInt value
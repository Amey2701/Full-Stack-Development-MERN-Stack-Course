// ========================================
// PRIMITIVE DATA TYPES IN JAVASCRIPT
// Intermediate-Level Examples
// ========================================

// ---------------------------
// 1. NUMBER
// ---------------------------
console.log("===== NUMBER =====");

let num1 = 42;
let num2 = 3.14;

// Math operations
console.log("Addition:", num1 + num2);
console.log("Division:", num1 / num2);
console.log("Exponent:", num1 ** 2); // power of 2

// Rounding methods
console.log("Math.round(4.6):", Math.round(4.6)); // nearest integer
console.log("Math.floor(4.6):", Math.floor(4.6)); // down
console.log("Math.ceil(4.2):", Math.ceil(4.2));   // up

// Checking if a value is a number
console.log("isNaN('abc'):", isNaN("abc")); // true
console.log("Number.isFinite(10):", Number.isFinite(10)); // true


// ---------------------------
// 2. STRING
// ---------------------------
console.log("\n===== STRING =====");

let firstName = "Alice";
let lastName = "Johnson";

// String concatenation
console.log("Full Name:", firstName + " " + lastName);

// Template literals with expressions
console.log(`Hello, ${firstName.toUpperCase()}! Your name has ${firstName.length} letters.`);

// String methods
let phrase = "JavaScript is awesome";
console.log("Includes 'Script'?", phrase.includes("Script")); // true
console.log("Starts with 'Java'?", phrase.startsWith("Java")); // true
console.log("Replace:", phrase.replace("awesome", "fun"));

// Splitting and joining
let words = phrase.split(" "); // ["JavaScript", "is", "awesome"]
console.log("Split words:", words);
console.log("Joined with dashes:", words.join("-"));


// ---------------------------
// 3. BOOLEAN
// ---------------------------
console.log("\n===== BOOLEAN =====");

let isOnline = true;
let hasPermission = false;

// Logical operators
console.log("isOnline && hasPermission:", isOnline && hasPermission); // false
console.log("isOnline || hasPermission:", isOnline || hasPermission); // true
console.log("!isOnline:", !isOnline); // false

// Double NOT (!!) to convert to Boolean
console.log("!!123:", !!123); // true (truthy)
console.log("!!0:", !!0);     // false (falsy)


// ---------------------------
// 4. UNDEFINED
// ---------------------------
console.log("\n===== UNDEFINED =====");

// Declared but not assigned
let notAssigned;
console.log("notAssigned:", notAssigned);

// Function parameter not passed
function greet(name) {
    console.log(`Hello, ${name}`); // name will be undefined if not passed
}
greet(); // Hello, undefined

// Destructuring missing property
let user = { username: "coder" };
let { age } = user; // age does not exist in user
console.log("Destructured age:", age); // undefined


// ---------------------------
// 5. NULL
// ---------------------------
console.log("\n===== NULL =====");

let selectedProduct = null;

// Using nullish coalescing (??) to provide a default value
console.log("Selected product:", selectedProduct ?? "No product selected");

// Resetting a value
selectedProduct = "Laptop";
console.log("Updated product:", selectedProduct);

// Intentional empty object property
let order = { product: null, quantity: 2 };
console.log("Order product:", order.product); // null
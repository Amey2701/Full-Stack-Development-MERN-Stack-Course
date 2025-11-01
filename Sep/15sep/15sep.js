// ==================================================
// VARIABLES
// ==================================================
console.log("==== VARIABLES ====");

// Direct variable (becomes global)
a = 10;
b = 20;
console.log("Direct Variable (a+b):", a + b);

// var keyword
var x = 15;
var y = 5;
console.log("Var Variable (x-y):", x - y);

// let keyword
let p = 7;
let q = 3;
console.log("Let Variable (p*q):", p * q);

// const keyword
const m = 100;
const n = 25;
console.log("Const Variable (m/n):", m / n);


// ==================================================
// OPERATORS
// ==================================================
console.log("\n==== OPERATORS ====");

let num1 = 12;
let num2 = 5;

// Arithmetic operators
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);

// Comparison operators
console.log("Is num1 > num2?", num1 > num2);
console.log("Is num1 == num2?", num1 == num2);

// Logical operators
console.log("Logical AND:", num1 > 10 && num2 < 10);
console.log("Logical OR:", num1 < 10 || num2 > 10);


// ==================================================
// LOOPS
// ==================================================
console.log("\n==== LOOPS ====");

// For loop
console.log("For Loop (1 to 5):");
for (let i = 1; i <= 5; i++) {
  console.log("i =", i);
}

// While loop
console.log("While Loop (1 to 3):");
let count = 1;
while (count <= 3) {
  console.log("count =", count);
  count++;
}

// Do-While loop
console.log("Do-While Loop (runs at least once):");
let j = 1;
do {
  console.log("j =", j);
  j++;
} while (j <= 2);


// ==================================================
// FUNCTIONS
// ==================================================
console.log("\n==== FUNCTIONS ====");

// 1. Parameterized function
function add(a, b) {
  console.log("Addition:", a + b);
}
add(20, 30);


// 2. Function without parameter
function greet() {
  console.log("Hello! This is a function without parameter.");
}
greet();

// 3. Function with return
function multiply(a, b) {
  return a * b;
}
let result = multiply(5, 6);
console.log("Multiplication with return:", result);

// 4. Function without return
function divide(a, b) {
  console.log("Division:", a / b);
}
divide(20, 4);

// 5. Named function (using modulus)
function modulus(x, y) {
  return x % y;
}
console.log("Modulus (15 % 4):", modulus(15, 4));

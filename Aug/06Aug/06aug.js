// =======================
// JavaScript Variable Declaration
// =======================

// var: Function-scoped, allows redeclaration
var x = 10;           // Declares a variable `x` with value 10 using var
var x = 20;           // Re-declares `x` with a new value 20 — allowed with var
console.log("var x:", x); // Prints 20, because the second declaration overwrites the first

// let: Block-scoped, cannot be redeclared
let y = 30;           // Declares a block-scoped variable `y` with value 30
// let y = 40;        // ❌ Not allowed: redeclaring `y` using let will throw an error
y = 40;               // ✅ Reassigning value to `y` is allowed
console.log("let y:", y); // Prints 40

// const: Block-scoped, cannot be reassigned or redeclared
const z = 50;         // Declares a constant `z` with value 50
// z = 60;            // ❌ Not allowed: constants can't be reassigned
console.log("const z:", z); // Prints 50

// =======================
// Naming Conventions
// =======================

let camelCaseName = "John";         // Uses camelCase style — common in JS for variables/functions
let snake_case_name = "Jane";       // Uses snake_case style — often used in other languages like Python
console.log("Camel case:", camelCaseName); // Prints "John"
console.log("Snake case:", snake_case_name); // Prints "Jane"

// =======================
// Arithmetic Operators
// =======================

let add = 5 + 3;         // Addition: 8
let sub = 10 - 4;        // Subtraction: 6
let mul = 6 * 7;         // Multiplication: 42
let div = 20 / 5;        // Division: 4
let inc = 5;             
inc++;                   // Increment: increases inc from 5 to 6
let dec = 10;
dec--;                   // Decrement: decreases dec from 10 to 9
let mod = 10 % 3;        // Modulus: returns remainder → 10 divided by 3 = 3 remainder 1

console.log("Addition:", add);       // Prints 8
console.log("Subtraction:", sub);    // Prints 6
console.log("Multiplication:", mul); // Prints 42
console.log("Division:", div);       // Prints 4
console.log("Increment:", inc);      // Prints 6
console.log("Decrement:", dec);      // Prints 9
console.log("Modulus:", mod);        // Prints 1

// =======================
// Comparison Operators
// =======================

console.log("5 == '5':", 5 == '5');         // true → compares only value, not type
console.log("5 === '5':", 5 === '5');       // false → compares value and type (number vs string)
console.log("5 != '6':", 5 != '6');         // true → values are not equal
console.log("8 > 6:", 8 > 6);               // true → 8 is greater than 6
console.log("3 < 7:", 3 < 7);               // true → 3 is less than 7
console.log("5 >= 5:", 5 >= 5);             // true → 5 is equal to 5
console.log("4 <= 6:", 4 <= 6);             // true → 4 is less than or equal to 6

// =======================
// Logical Operators
// =======================

let user = "admin";
let password = "1234";

console.log("true && true:", true && true);
console.log("false && true:", false && true);
console.log("true || false:", true || false);
console.log("false || false:", false || false);
console.log("!true:", !true);

// =======================
// Conditional (Ternary) Operator
// =======================

let age = 18;
let canVote = age >= 18 ? "Yes" : "No";   // If age is 18 or more → Yes, else → No
console.log("Can vote:", canVote);        // Prints "Yes"

// =======================
// Bitwise Operators
// =======================

console.log("5 & 3:", 5 & 3);     // 1 → 0101 & 0011 = 0001 (bitwise AND)
console.log("5 | 3:", 5 | 3);     // 7 → 0101 | 0011 = 0111 (bitwise OR)
console.log("5 ^ 3:", 5 ^ 3);     // 6 → 0101 ^ 0011 = 0110 (bitwise XOR)
console.log("~5:", ~5);           // -6 → bitwise NOT: flips bits of 5 and adds -1
console.log("5 << 1:", 5 << 1);   // 10 → Left shift: 5 * 2^1
console.log("5 >> 1:", 5 >> 1);   // 2 → Right shift: 5 / 2^1

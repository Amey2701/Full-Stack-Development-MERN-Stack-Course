// ==============================
// 📘 STRING METHODS
// ==============================

let str = "JavaScript";

// 1. slice(start, end)
// - Extracts part of a string
// - end is not included
// - supports negative indexes
console.log("=== String.slice() ===");
console.log(str.slice(0, 4));    // "Java"
console.log(str.slice(4, 10));   // "Script"
console.log(str.slice(-6, -3));  // "Scr"

// 2. substring(start, end)
// - Similar to slice()
// - NO negative indexes (treated as 0)
// - Swaps start/end if start > end
console.log("=== String.substring() ===");
console.log(str.substring(0, 4)); // "Java"
console.log(str.substring(4, 0)); // "Java" (swapped)
console.log(str.substring(-3, 4)); // "Java" (negative treated as 0)

// 3. Simulated splice for strings
// - Strings are immutable → no splice()
// - Use slice + concatenation
console.log("=== Simulated String.splice() ===");

// Insert " JS " after "Hello"
let hello = "HelloWorld";
let modifiedInsert = hello.slice(0, 5) + " JS " + hello.slice(5);
console.log(modifiedInsert); // "Hello JS World"

// Replace "World" with "JS"
let modifiedReplace = hello.slice(0, 5) + "JS";
console.log(modifiedReplace); // "HelloJS"

// ✅ Reusable helper function (like array splice for strings)
function stringSplice(str, start, deleteCount, insert = "") {
  return str.slice(0, start) + insert + str.slice(start + deleteCount);
}

console.log(stringSplice("HelloWorld", 5, 5, "JS")); // "HelloJS"
console.log(stringSplice("HelloWorld", 5, 0, " JavaScript ")); // "Hello JavaScript World"


// ==============================
// 📘 ARRAY METHODS
// ==============================

let arr = ["a", "b", "c", "d"];

// 1. slice(start, end)
// - Extracts a portion of the array
// - Does NOT change original array
console.log("=== Array.slice() ===");
console.log(arr.slice(1, 3)); // ["b", "c"]
console.log(arr.slice(-3, -1)); // ["b", "c"]

// 2. splice(start, deleteCount, ...items)
// - Changes the array in place
// - Removes, replaces, or inserts elements
console.log("=== Array.splice() ===");

let arr2 = ["a", "b", "c", "d"];
let removed = arr2.splice(1, 2, "x", "y"); 
console.log("Modified:", arr2); // ["a", "x", "y", "d"]
console.log("Removed:", removed); // ["b", "c"]

// Insert without removing
let arr3 = ["a", "b", "c"];
arr3.splice(1, 0, "x"); 
console.log(arr3); // ["a", "x", "b", "c"]

// Remove only
let arr4 = ["a", "b", "c", "d"];
arr4.splice(2, 2); 
console.log(arr4); // ["a", "b"]
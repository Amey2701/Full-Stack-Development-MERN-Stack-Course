// 📌 JavaScript Methods

// 🔹 1. String Methods

// A string in JS is a sequence of characters wrapped in quotes. Methods are built-in functions attached to strings.

// 🔸 Case Conversion
// * .toLowerCase() → converts to lowercase
// * .toUpperCase() → converts to uppercase

let str = "Hello World";
console.log(str.toLowerCase()); // "hello world"
console.log(str.toUpperCase()); // "HELLO WORLD"

// 🔸 Trimming Whitespace
// * .trim() → removes whitespace from both ends
// * .trimStart() / .trimEnd() → removes from start/end only

let s = "   JavaScript   ";
console.log(s.trim());      // "JavaScript"
console.log(s.trimStart()); // "JavaScript   "
console.log(s.trimEnd());   // "   JavaScript"

// 🔸 Searching
// * .includes(substring) → checks if string contains substring
// * .startsWith() / .endsWith() → checks beginning or ending
// * .indexOf() / .lastIndexOf() → find position of substring

let text = "JavaScript is fun";
console.log(text.includes("Script")); // true
console.log(text.startsWith("Java")); // true
console.log(text.endsWith("fun"));    // true
console.log(text.indexOf("is"));      // 11
console.log(text.lastIndexOf("a"));   // 3

// 🔸 Extracting Parts
// * .slice(start, end) → returns substring from start to end-1
// * .substring(start, end) → similar to slice, but doesn’t accept negative indexes
// * .substr(start, length) → old method, extracts a set length

let word = "JavaScript";
console.log(word.slice(0, 4));    // "Java"
console.log(word.substring(4, 10)); // "Script"
console.log(word.substr(4, 6));     // "Script"

// 🔸 Replace & Modify
// * .replace(old, new) → replaces first match
// * .replaceAll(old, new) → replaces all matches
// * .repeat(n) → repeats string n times
// * .concat() → joins strings

let msg = "I like cats. Cats are cute.";
console.log(msg.replace("Cats", "Dogs"));   // "I like cats. Dogs are cute."
console.log(msg.replaceAll("Cats", "Dogs")); // "I like cats. Dogs are cute."
console.log("Ha".repeat(3)); // "HaHaHa"
console.log("Hello".concat(" ", "World")); // "Hello World"

// 🔸 Splitting & Joining
// * .split(separator) → converts string into array
// * .join(separator) is an array method to convert back

let names = "Ali,John,Mary";
console.log(names.split(",")); // ["Ali", "John", "Mary"]

// 🔸 Matching (Regex)
// * .match(regex) → returns matches
// * .matchAll(regex) → returns iterable of matches
// * .search(regex) → returns index of match

let data = "abc123xyz456";
console.log(data.match(/\d+/g)); // ["123", "456"]
console.log(data.search(/\d/));  // 3

// 🔸 Other Utilities
// * .charAt(index) → returns character
// * .charCodeAt(index) → returns UTF-16 code
// * .codePointAt(index) → returns Unicode code point
// * .fromCharCode() (static) → convert code → character
// * .padStart(len, padStr) / .padEnd(len, padStr) → pad with characters

let val = "Hi";
console.log(val.charAt(0)); // "H"
console.log(val.charCodeAt(0)); // 72
console.log(String.fromCharCode(72, 105)); // "Hi"
console.log("5".padStart(3, "0")); // "005"

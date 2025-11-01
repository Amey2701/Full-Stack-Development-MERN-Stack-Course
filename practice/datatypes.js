// PRACTICE FILE: DATA TYPES BASICS + STRING METHODS

// 1. DATA TYPES IN JS

// Number type
let num = 100;  
console.log("Number:", num);

// String type
let str = "Hello World";  
console.log("String:", str);

// Boolean type (true or false)
let isTrue = true;  
console.log("Boolean:", isTrue);

// Undefined type (variable declared but no value yet)
let undef;  
console.log("Undefined:", undef);

// Null type (empty value)
let nul = null;  
console.log("Null:", nul);

// BigInt type (used for very large numbers)
let bigIntNum = 123456789012345678901234567890n;  
console.log("BigInt:", bigIntNum);

// Symbol type (unique values, often used as keys)
let sym = Symbol("id");  
console.log("Symbol:", sym);

// Array (list of values)
let arr = [10, 20, 30];  
console.log("Array:", arr);

// Object (collection of key-value pairs)
let obj = { name: "Amey", age: 21 };  
console.log("Object:", obj);

// Function (block of reusable code)
let func = function() { return "I am a function"; };  
console.log("Function:", func());

// --------------------------
// 2. STRING METHODS IN JS
// --------------------------

let text = "  JavaScript String Methods Practice  ";
console.log("\nOriginal text:", text);

// length -> count of characters
console.log("Length:", text.length);

// Convert to upper and lower case
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

// Remove spaces from start and end
console.log("Trim:", text.trim());
console.log("Trim Start:", text.trimStart());
console.log("Trim End:", text.trimEnd());

// Get character at position
console.log("CharAt(2):", text.charAt(2));
console.log("CharCodeAt(2):", text.charCodeAt(2)); // unicode value

// at() -> modern way to get character
console.log("At(3):", text.at(3));

// Cut part of string
console.log("Slice(2,10):", text.slice(2,10));
console.log("Substring(2,10):", text.substring(2,10));
console.log("Substr(2,10):", text.substr(2,10));

// Join two strings
let word1 = "JavaScript";
let word2 = "Rocks!";
console.log("Concat:", word1.concat(" ", word2));


// Repeat a string many times
console.log("Repeat:", word1.repeat(3));

// Replace words
let replaced = text.replace("JavaScript", "JS");
console.log("Replace:", replaced);

// Replace all occurrences
let multipleReplace = "apple, apple, apple".replaceAll("apple", "mango");
console.log("ReplaceAll:", multipleReplace);

// Split string into array
let fruits = "apple,banana,kiwi";
console.log("Split:", fruits.split(","));

// Check if string contains something
console.log("Includes 'String':", text.includes("String"));
console.log("StartsWith '  Java':", text.startsWith("  Java"));
console.log("EndsWith 'Practice  ':", text.endsWith("Practice  "));

// Find index positions
console.log("IndexOf('Script'):", text.indexOf("Script"));
console.log("LastIndexOf('a'):", text.lastIndexOf("a"));

// Match using regex
let sentence = "The rain in SPAIN stays mainly in the plain";
console.log("Match:", sentence.match(/ain/g));   // finds "ain"
console.log("MatchAll:", [...sentence.matchAll(/ain/g)]);

// Search for something
console.log("Search 'SPAIN':", sentence.search("SPAIN"));

// Add padding (extra characters)
let numStr = "5";
console.log("PadStart:", numStr.padStart(4, "0")); // "0005"
console.log("PadEnd:", numStr.padEnd(4, "x"));     // "5xxx"

// Convert string object to normal string
let newStr = new String("hello");
console.log("valueOf:", newStr.valueOf());
console.log("toString:", num.toString());

// Compare strings
console.log("'apple' vs 'banana':", "apple".localeCompare("banana"));

// Normalize unicode characters
let unicodeStr = "\u004F\u030C"; // O + accent
console.log("Normalized:", unicodeStr.normalize("NFC"));

// Convert char codes
console.log("String.fromCharCode(65):", String.fromCharCode(65)); // "A"
console.log("CodePointAt(0):", "ABC".codePointAt(0)); // 65
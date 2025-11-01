// =============================
// Falsy Values in JavaScript
// =============================

// In JavaScript, values that evaluate to false inside a boolean context are 
// called FALSY.
// Only 8 falsy values exist: false, 0, -0, 0n, "", null, undefined, NaN.


// false itself
if (false) console.log("Not printed (false)");  
// Nothing prints

// zero is falsy
if (0) console.log("Not printed (0)");  
// Nothing prints

// negative zero is also falsy
if (-0) console.log("Not printed (-0)");  
// Nothing prints

// BigInt zero is falsy
if (0n) console.log("Not printed (0n)");  
// Nothing prints

// empty string "" is falsy
if ("") console.log("Not printed (empty string)");  
// Nothing prints

// null is falsy
if (null) console.log("Not printed (null)");  
// Nothing prints

// undefined is falsy
if (undefined) console.log("Not printed (undefined)");  
// Nothing prints

// NaN (Not a Number) is falsy
if (NaN) console.log("Not printed (NaN)");  
// Nothing prints

// Example with array length → [].length = 0 which is falsy
if ([].length) {
    console.log("Not printed, [].length is 0 which is falsy");
} else {
    console.log("Runs because 0 is falsy");
}
// Output: Runs because 0 is falsy
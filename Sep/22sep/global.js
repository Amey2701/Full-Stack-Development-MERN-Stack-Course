// ==========================
// GLOBAL SCOPE EXAMPLE
// ==========================

// Declared outside any function/block → global
var globalVar = "I am a GLOBAL variable";

function showGlobal() {
  // globalVar is accessible inside the function
  console.log("Inside function:", globalVar);
}

showGlobal(); // call the function

// globalVar is also accessible outside the function
console.log("Outside function:", globalVar);

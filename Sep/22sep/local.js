// ==========================
// LOCAL SCOPE EXAMPLES
// ==========================

// Example 1: local variable inside function
function greet() {
  let msg = "Hello, I am local"; // only inside this function
  console.log(msg); // accessible here
}

greet(); // works fine
// console.log(msg); // ❌ Error: msg is not defined

// Example 2: local variable overriding global variable
let name = "Global John"; // global variable

function showName() {
  let name = "Local Ronny"; // local variable (hides global one inside this 
  // function)
  console.log("Inside function:", name);
}

//local scope > global scope


showName(); // prints "Local Ronny"
console.log("Outside function:", name); // prints "Global John"

// Example 3: block local scope
{
  let blockVar = "Local block variable"; // only inside this block
  console.log(blockVar); // accessible here
}
// console.log(blockVar); // ❌ Error: blockVar not defined
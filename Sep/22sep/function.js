// ==========================
// FUNCTION SCOPE EXAMPLE
// ==========================

function testVar() {
  // var is function scoped

  if (true) {
    // var declared inside block still belongs to the function
    var b = 20;
  }
    var a = 10;

  // Both variables are available inside the function
  console.log("Inside function, a:", a);
  console.log("Inside function, b:", b);



}

testVar(); // call the function

// ❌ Error: a and b cannot be accessed outside the function
// console.log(a); 
// console.log(b);

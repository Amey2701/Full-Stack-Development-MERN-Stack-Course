// ==========================
// Built-in Function Example
// ==========================
function builtInFunction() {
  // alert() is a built-in function
  alert("This is a Built-in Function: alert()");
  document.getElementById("output").innerText = "Built-in function (alert) was triggered!";
}

// ==========================
// Named Function Example
// ==========================
function addNumbers(a, b) {
  return a + b;
}

function namedFunction() {
  let result = addNumbers(5, 10);
  document.getElementById("output").innerText = "Named Function Result: 5 + 10 = " + result;
}

// ==========================
// Anonymous Function Example
// ==========================
let amey = function(x, y) {
  return x - y;
};

function anonymousFunction() {
  let result = amey(4, 5);
  document.getElementById("output").innerText = "Anonymous Function Result: 4 * 5 = " + result;  //-1
}

// ==========================
// Arrow Function Example
// ==========================
let square = (n) => n * n;

function arrowFunction() {
  let result = square(6);
  document.getElementById("output").innerText = "Arrow Function Result: 6² = " + result;
}

// ==========================
// IIFE (Immediately Invoked Function)
// ==========================
function iifeFunction() {
  (function() {
    document.getElementById("output").innerText = "IIFE Function executed immediately!";
  })();
}

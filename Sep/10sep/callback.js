// ==========================================
// 1. SIMPLE CALLBACK FUNCTION
// ==========================================
function greet(cb) {               // accepts a callback function
  cb();                            // run the callback
  console.log("hi");               // print after callback
  console.log("bye");
}

function sayHello() {
  console.log("hello");
}

// Calling greet with sayHello as callback
greet(sayHello);                   
// Output: hello, hi, bye



// ==========================================
// 2. CALLBACK WITH ASYNCHRONOUS TASK
// ==========================================
function fetchData(cb) {
  console.log("Fetching data...");

  let data = { name: "Shubham", age: 20 };

  // simulate delay using setTimeout
  setTimeout(() => {
    console.log("Data fetched!");
    cb(data);   // pass data to callback
  }, 2000);
}

// Callback functions
function displayData(d) {
  console.log("displayData:", d);
}

function processData(d) {
  console.log("processData:", d);
}

// Calling fetchData with different callbacks
fetchData(displayData);
fetchData(processData);
// 1. setTimeout Example
console.log("Start setTimeout Example");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End setTimeout Example");

// ==========================================
// 2. clearTimeout Example
// ==========================================
const timeoutID = setTimeout(() => {
  console.log("This will NOT run, cleared!");
}, 1000);

clearTimeout(timeoutID);  // cancels the above timeout



// ==========================================
// 3. setInterval + clearInterval Example
// ==========================================
let counter = 1;

let intervalID = setInterval(() => {
  console.log("Counter:", counter);
  counter++;

  if (counter > 5) {
    clearInterval(intervalID);  // stop loop after 5
    console.log("Interval Stopped!");
  }
}, 1000);



// ==========================================
// 4. Synchronous vs Asynchronous
// ==========================================
console.log("=== SYNC Example ===");
console.log("A");
console.log("B");
console.log("C");

console.log("=== ASYNC Example ===");
console.log("A");

setTimeout(() => {
  console.log("B (after 2s)");
}, 2000);

console.log("C");
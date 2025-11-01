// ===========================
// Async & Await Demonstration
// ===========================

console.log("Async Await Example Loaded");

// ---------------------------
// Example 1: Fetch Data
// ---------------------------

// Simulating server/database request with a delay
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Rahul", age: 25 });
    }, 3000); // waits for 3 seconds
  });
}

// Async function to show data
async function showData() {
  const output = document.getElementById("fetchOutput");
  output.innerText = "Fetching data, please wait...";

  console.log("Inside showData, waiting for server response...");

  // 'await' pauses execution until promise resolves
  const result = await fetchData();

  // Display result on UI and console
  output.innerText = `User Fetched: ${result.name}, Age: ${result.age}`;
  console.log("Fetched Result:", result);
}

// Event listener for button
document.getElementById("fetchBtn").addEventListener("click", showData);

// ---------------------------
// Example 2: Sequential Steps
// ---------------------------

// Step 1 simulation
function doStep1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 executed");
      resolve("Data 1");
    }, 1000);
  });
}

// Step 2 simulation
function doStep2(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 executed with", input);
      resolve("Data 2");
    }, 1000);
  });
}

// Step 3 simulation
function doStep3(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 executed with", input);
      resolve("Data 3");
    }, 1000);
  });
}

// Async function to run steps sequentially
async function runSteps() {
  const output = document.getElementById("stepsOutput");
  output.innerText = "Running steps...";

  // Each step waits for the previous one
  const result1 = await doStep1();
  const result2 = await doStep2(result1);
  const result3 = await doStep3(result2);

  // Display final result
  output.innerText = `Final Result: ${result3}`;
  console.log("Final Result:", result3);
}

// Event listener for button
document.getElementById("stepsBtn").addEventListener("click", runSteps);

console.log("End of File!");

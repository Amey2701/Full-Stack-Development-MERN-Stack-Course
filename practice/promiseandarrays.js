// =====================================
// TEAM PRACTICE: PROMISES + ARRAYS
// =====================================

// ==========================
// PROMISE PRACTICE
// ==========================

// Example: A simple promise that resolves/rejects
function practicePromise(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("✅ Promise Resolved: Data Fetched Successfully!");
      } else {
        reject("❌ Promise Rejected: Failed to Fetch Data!");
      }
    }, 1000);
  });
}

// Call promise with resolve
practicePromise(true)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

// Call promise with reject
practicePromise(false)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

// ==========================
// ARRAY METHODS PRACTICE
// ==========================

let numbers = [1, 2, 3, 4, 5];
let names = ["Amey", "Mali", "Team", "Practice", "Array"];

// 1. forEach → loop through array
console.log("forEach:");
numbers.forEach((num) => console.log(num * 2));

// 2. map → create new array
console.log("map:");
let squares = numbers.map((n) => n * n);
console.log(squares);

// 3. filter → filter elements
console.log("filter:");
let evens = numbers.filter((n) => n % 2 === 0);
console.log(evens);

// 4. reduce → accumulate values
console.log("reduce:");
let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum);

// 5. find → first element that matches
console.log("find:");
let firstLarge = numbers.find((n) => n > 3);
console.log(firstLarge);

// 6. some → check if any element passes
console.log("some:");
let hasEven = numbers.some((n) => n % 2 === 0);
console.log(hasEven);

// 7. every → check if all pass condition
console.log("every:");
let allPositive = numbers.every((n) => n > 0);
console.log(allPositive);

// 8. includes → check existence
console.log("includes:");
console.log(names.includes("Team"));

// 9. indexOf → get position
console.log("indexOf:");
console.log(names.indexOf("Practice"));

// 10. concat → merge arrays
console.log("concat:");
let merged = numbers.concat([6, 7, 8]);
console.log(merged);

// 11. slice → extract sub-array
console.log("slice:");
console.log(names.slice(1, 4));

// 12. splice → add/remove elements
console.log("splice:");
let removed = names.splice(2, 1, "Updated");
console.log("Removed:", removed);
console.log("After splice:", names);

// 13. sort → sort alphabetically
console.log("sort:");
let sortedNames = [...names].sort();
console.log(sortedNames);

// 14. reverse → reverse array
console.log("reverse:");
console.log(numbers.reverse());

// 15. join → array to string
console.log("join:");
console.log(names.join(" - "));

// 16. flat → flatten nested array
console.log("flat:");
let nested = [1, [2, [3, 4]], 5];
console.log(nested.flat(2));

// 17. fill → replace values
console.log("fill:");
let filled = new Array(5).fill("Practice");
console.log(filled);

// 18. from → create array from iterable
console.log("from:");
let strArray = Array.from("TEAM");
console.log(strArray);

// 19. at → access by index
console.log("at:");
console.log(numbers.at(2));

// 20. push/pop → add/remove end
console.log("push/pop:");
numbers.push(10);
console.log(numbers);
numbers.pop();
console.log(numbers);

// 21. shift/unshift → add/remove start
console.log("shift/unshift:");
numbers.unshift(0);
console.log(numbers);
numbers.shift();
console.log(numbers);

console.log("✅ Array methods practice completed!");
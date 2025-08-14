// =====================================
// CONTROL & LOOP STATEMENTS IN JAVASCRIPT
// =====================================

// ---------- 1. IF STATEMENT ----------
console.log("\n=== IF STATEMENT ===");

let temperature = 28; // Store the current temperature
// Check if temperature is greater than 30
if (temperature > 30) {
    console.log("It's hot outside!"); // Runs only if condition is true
}
console.log("Temperature check complete."); // Always runs

// ---------- 2. IF...ELSE STATEMENT ----------
console.log("\n=== IF...ELSE STATEMENT ===");

let score = 75; // Student score
// Check if score is greater than or equal to 50
if (score >= 50) {
    console.log("You passed the exam!"); // Runs if condition is true
} else {
    console.log("You failed the exam!"); // Runs if condition is false
}

// ---------- 3. NESTED IF...ELSE STATEMENT ----------
console.log("\n=== NESTED IF...ELSE STATEMENT ===");

let marks = 85; // Marks obtained
// First check for Grade A
if (marks >= 90) {
    console.log("Grade: A");
} else {
    // If not A, check for Grade B
    if (marks >= 75) {
        console.log("Grade: B");
    } else {
        console.log("Grade: C or below");
    }
}

// ---------- 4. SWITCH CASE ----------
console.log("\n=== SWITCH CASE ===");

let day = 3; // Number representing the day
switch (day) {
    case 1:
        console.log("Monday");
        break; // Exit switch
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day"); // Runs if none match
}

// =====================================
// LOOP STATEMENTS
// =====================================

// ---------- 1. FOR LOOP ----------
console.log("\n=== FOR LOOP ===");
// Loop from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("For loop iteration:", i);
}

// ---------- 2. WHILE LOOP ----------
console.log("\n=== WHILE LOOP ===");

let count = 1; // Counter starts at 1
// Runs while count is less than or equal to 5
while (count <= 5) {
    console.log("While loop count:", count);
    count++; // Increment counter
}

// ---------- 3. DO...WHILE LOOP ----------
console.log("\n=== DO...WHILE LOOP ===");

let num = 1; // Start value
// Always runs at least once, then checks condition
do {
    console.log("Do...While loop num:", num);
    num++;
} while (num <= 5);

console.log("\n=== All examples executed successfully! ===");
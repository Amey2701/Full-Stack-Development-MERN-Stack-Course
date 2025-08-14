// =====================================
// Expanded Control Statements Examples
// =====================================

// ---------- 1. IF STATEMENT ----------
console.log("\n=== IF STATEMENT ==="); // Prints section title

let temperature = 35; // Declare a variable 'temperature' with value 35
// Check if the temperature is greater than 30
if (temperature > 30) {
    console.log("It's a hot day! Stay hydrated."); // Runs if condition is true
}

let isLoggedIn = true; // Boolean variable indicating login status
// Check if the user is logged in
if (isLoggedIn) {
    console.log("Welcome back, user!"); // Runs if user is logged in
}

// ---------- 2. IF...ELSE ----------
console.log("\n=== IF...ELSE STATEMENT ==="); // Prints section title

let balance = 500; // User account balance
let withdrawal = 700; // Amount to withdraw
// If withdrawal amount is less than or equal to balance
if (withdrawal <= balance) {
    console.log("Withdrawal successful."); // Enough balance
} else {
    console.log("Insufficient funds."); // Not enough balance
}

let number = -3; // Example number
// Check if number is positive
if (number >= 0) {
    console.log("Positive number"); // Runs if number >= 0
} else {
    console.log("Negative number"); // Runs if number < 0
}

// ---------- 3. NESTED IF...ELSE ----------
console.log("\n=== NESTED IF...ELSE ==="); // Prints section title

let grade = 82; // Example student grade
// First check: Did the student pass (grade >= 50)?
if (grade >= 50) {
    // Second check: Is grade >= 85?
    if (grade >= 85) {
        console.log("Grade: A"); // Excellent
    }
    // Else if grade is >= 70 but less than 85
    else if (grade >= 70) {
        console.log("Grade: B"); // Good
    }
    // Else: grade is >= 50 but less than 70
    else {
        console.log("Grade: C"); // Average
    }
} else {
    console.log("Grade: F"); // Fail
}

// Another Nested Example: Login System
let username = "admin"; // Example username
let password = "1234";  // Example password
// First check: Is the username correct?
if (username === "admin") {
    // Second check: Is the password correct?
    if (password === "1234") {
        console.log("Login successful"); // Both match
    } else {
        console.log("Incorrect password"); // Wrong password
    }
} else {
    console.log("Username not found"); // Wrong username
}

// ---------- 4. SWITCH CASE ----------
console.log("\n=== SWITCH STATEMENT ==="); // Prints section title

// Another Switch Example - Simple Calculator
let operator = "+"; // Operator: +, -, *, or /
let x = 10, y = 5;  // Two numbers for calculation
// Check the operator and perform matching operation
switch (operator) {
    case "+": // Addition
        console.log(`${x} + ${y} =`, x + y);
        break;
    case "-": // Subtraction
        console.log(`${x} - ${y} =`, x - y);
        break;
    case "*": // Multiplication
        console.log(`${x} * ${y} =`, x * y);
        break;
    case "/": // Division
        console.log(`${x} / ${y} =`, x / y);
        break;
    default: // Invalid operator
        console.log("Invalid operator");
}

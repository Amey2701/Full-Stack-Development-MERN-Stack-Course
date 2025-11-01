/* =====================================
   1️⃣ Regular Expression Example
   ===================================== */

/**
 * extractDigits()
 * - Reads text from input field
 * - Uses RegEx to extract all digits (\d+)
 * - Displays them on screen
 */
function extractDigits() {
  const input = document.getElementById('regexInput').value; // get user input
  const digits = input.match(/\d+/g); // match one or more digits globally
  const output = document.getElementById('regexOutput');

  if (digits) {
    // If digits are found, join and show them
    output.textContent = `Extracted digits: ${digits.join(' , ')}`;
  } else {
    // If no digits found
    output.textContent = 'No digits found in the input!';
  }
}

// /^d{10}
// /^[\w.-]+@[\w.-]+\.\w+$/


/* =====================================
   2️⃣ Nullish Coalescing Operator Example
   ===================================== */

/**
 * showName()
 * - Reads user input
 * - If input is null or undefined, shows default name "Guest"
 * - Demonstrates difference between ?? and ||
 */
function showName() {
  let name = document.getElementById('nameInput').value.trim(); // read input
  
  // If user types 'null', treat it as null (for demo)
  if (name.toLowerCase() === 'null') name = null;

  // Use ?? to check only for null or undefined
  const displayName = name ?? 'Guest'; // fallback value
  
  // Display result on screen
  document.getElementById('nameOutput').textContent = `Display Name: ${displayName}`;
}

/* =====================================
   3️⃣ Date Object Example
   ===================================== */

/**
 * showDate()
 * - Creates a Date object for current time
 * - Extracts individual date parts using Date methods
 * - Displays formatted information
 */
function showDate() {
  const now = new Date(); // current date/time

  const formatted = `
Full Date: ${now.toString()}
Year: ${now.getFullYear()}
Month: ${now.getMonth() + 1}   // (Month starts from 0)
Date: ${now.getDate()}
Day of Week: ${now.getDay()}   // (0 = Sunday)
Time: ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}
Milliseconds: ${now.getMilliseconds()}
`;

  // Show output
  document.getElementById('dateOutput').textContent = formatted;
}

/* =====================================
   4️⃣ Math Object Example
   ===================================== */

/**
 * generateRandom()
 * - Generates a random number between 1–100
 * - Shows use of Math methods (pow, sqrt, max, min)
 * - Displays constants like Math.PI
 */
function generateRandom() {
  const num = Math.floor(Math.random() * 100) + 1; // random number between 1 and 100
  const pi = Math.PI.toFixed(2); // PI value
  const sqrt = Math.sqrt(num).toFixed(2); // Square root
  const power = Math.pow(2, 3); // 2³ = 8

  const text = `
Random Number (1–100): ${num}
PI Value: ${pi}
Square Root of ${num}: ${sqrt}
2³ = ${power}
Max(10,5,8): ${Math.max(10,5,8)}
Min(10,5,8): ${Math.min(10,5,8)}
`;

  // Display result
  document.getElementById('mathOutput').textContent = text;
}
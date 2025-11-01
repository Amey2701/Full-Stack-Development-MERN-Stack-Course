// ==========================
// SYNCHRONOUS FUNCTION EXAMPLE
// ==========================

// Function a: simply logs "A"
function a() {
    console.log("A");
}

// Function b: calls function a, then logs "B"
function b() {
    a(); // execution jumps into function a()
    console.log("B");
}

// Call function b
b();

/*
Step-by-step execution (Call Stack):
1. b() is called → pushed into stack
2. Inside b(), a() is called → pushed into stack
3. a() executes → logs "A" → removed from stack
4. Continue b() → logs "B" → removed from stack
5. Stack is now empty

Output:
A
B
*/
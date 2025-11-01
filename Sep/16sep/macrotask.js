// ==========================
// MACROTASK with setTimeout
// ==========================

console.log("Start");

// Schedule 2 tasks using setTimeout
setTimeout(() => console.log("Timeout callback executed after 5000ms!"), 5000);
setTimeout(() => console.log("Timeout callback executed with ZERO delay!"), 0);

console.log("End");

/*
Step-by-step execution:
1. Call Stack executes console.log("Start") → output: Start
2. setTimeout(5000) → handled by Web API, callback goes to Macrotask Queue after 5000ms
3. setTimeout(0) → handled by Web API, callback goes to Macrotask Queue after ~0ms
4. Call Stack executes console.log("End") → output: End
5. Event Loop checks → stack empty?
   - YES → executes 0ms setTimeout callback
   - Then executes 5000ms setTimeout callback

Output:
Start
End
Timeout callback executed with ZERO delay!
Timeout callback executed after 500ms!
*/

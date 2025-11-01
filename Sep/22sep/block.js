// ==========================
// BLOCK SCOPE EXAMPLE
// ==========================

if (true) {
  // let and const → block scoped (only inside this { })
  let blockLet = "I am block-scoped (let)";
  const blockConst = "I am block-scoped (const)";

  // var → ignores block scope, behaves like global or function scope
  var blockVar = "I am var (not block scoped)";

  console.log("Inside block:", blockLet, blockConst, blockVar); 
}

// ❌ These cause errors because let and const are block scoped
// console.log(blockLet); 
// console.log(blockConst);

// ✅ var is still accessible outside the block
console.log("Outside block (var only):", blockVar);

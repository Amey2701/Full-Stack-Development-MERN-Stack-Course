// Case 2: b() logs first, then calls a()

function a() {
    console.log("A");
}

function b() {
    console.log("B"); // now logs before calling a
    a();
}

b();

/*
Step:
1. Call b → push b()
2. Inside b → log "B"
3. Call a → push a(), log "A", pop a()
4. Pop b

Output:
B
A
*/

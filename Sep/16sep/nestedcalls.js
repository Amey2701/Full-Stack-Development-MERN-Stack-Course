// Case 3: a() also calls another function c()

function c() {
    console.log("C");
}

function a() {
    c(); // a calls c first
    console.log("A");
}

function b() {
    a();
    console.log("B");
}

b();

/*
Step:
1. Call b → push b
2. Inside b, call a → push a
3. Inside a, call c → push c
4. c logs "C" → pop c
5. a logs "A" → pop a
6. b logs "B" → pop b

Output:
C
A
B
*/

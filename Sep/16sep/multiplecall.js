// Case 4: Call b() twice

function a() {
    console.log("A");
}

function b() {
    
    console.log("B");
    a();
}

b(); // first call
b(); // second call

/*
Step:
First call:
  a → "A"
  b → "B"
Second call:
  a → "A"
  b → "B"

Output:
A
B
A
B
*/

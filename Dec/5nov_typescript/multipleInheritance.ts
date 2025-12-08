// ====================================================
// Multiple Inheritance via Interfaces
// ====================================================

interface CanWalk {
  walk(): void;
}

interface CanSwim {
  swim(): void;
}

class Person implements CanWalk, CanSwim {
  walk(): void {
    console.log("Walking....!");
  }
  swim(): void {
    console.log("Swimming....!");
  }
}

const p = new Person();
p.walk();
p.swim();

// =============================
// OOPS Concepts in JavaScript
// =============================


// -------- Encapsulation --------
// Encapsulation means wrapping properties (data) and methods (functions) inside a class.
// Here, everything related to Mobile (brand, model, call function) is grouped inside the Mobile class.
class Mobile {
    constructor(brand, model) {
        this.brand = brand;   // property to store brand name
        this.model = model;   // property to store model name
    }
    call() {
        // method to simulate calling
        console.log(`Calling from ${this.brand} ${this.model}`);
    }
}

// create an object (instance) of Mobile class
const phone = new Mobile("Apple", "iPhone 15");
phone.call(); // Output: Calling from Apple iPhone 15


// -------- Abstraction --------
// Abstraction means hiding internal details and only exposing necessary functionalities.
// User only calls washClothes() without worrying about how water is filled, drum spins, or water is drained.
class WashingMachine {
    // internal steps (not exposed directly to user)
    fillWater() {
        console.log("Filling water...");
    }
    spinDrum() {
        console.log("Spinning the drum...");
    }
    drainWater() {
        console.log("Draining water...");
    }

    // abstracted method (only this is shown to the user)
    washClothes() {
        this.fillWater();   // internal detail
        this.spinDrum();    // internal detail
        this.drainWater();  // internal detail
        console.log("Clothes are washed!"); // user sees only final result
    }
}

// create object
const wm = new WashingMachine();
wm.washClothes();
// Output: Filling water...
//         Spinning the drum...
//         Draining water...
//         Clothes are washed!


// -------- Polymorphism --------
// Polymorphism means one method (area) behaves differently depending on the object (Circle, Rectangle, Triangle).
class Shape {
    area() {
        console.log("Area not defined"); // base method
    }
}
class Circle extends Shape {
    area() {
        console.log("Area of circle = πr²"); // overridden method
    }
}
class Rectangle extends Shape {
    area() {
        console.log("Area of rectangle = length × width"); // overridden method
    }
}
class Triangle extends Shape {
    area() {
        console.log("Area of triangle = ½ × base × height"); // overridden method
    }
}

// same method name "area()", different outputs
new Circle().area();      // Output: Area of circle = πr²
new Rectangle().area();   // Output: Area of rectangle = length × width
new Triangle().area();    // Output: Area of triangle = ½ × base × height


// -------- Inheritance --------
// Inheritance allows one class to acquire properties & methods of another class.


// --- Single inheritance ---
class Person {
    constructor(name) {
        this.name = name; // parent property
    }
}
class Student extends Person {
    study() {
        console.log(`${this.name} is studying`); // uses parent's property
    }
}

// create Student object
const student = new Student("Alice");
student.study(); // Output: Alice is studying


// --- Hierarchical inheritance ---
// One parent class -> multiple child classes
class Appliance {
    constructor(brand) {
        this.brand = brand;
    }
    turnOn() {
        console.log(`${this.brand} appliance is ON`);
    }
}
class Fan extends Appliance {}   // inherits from Appliance
class AC extends Appliance {}    // inherits from Appliance

new Fan("Orient").turnOn();    // Output: Orient appliance is ON
new AC("Samsung").turnOn();    // Output: Samsung appliance is ON


// --- Multilevel inheritance ---
// One class inherits from another, which itself inherits 
// from another (chain of inheritance).  
class LivingBeing {
    breathe() {
        console.log("Breathing...");
    }
}
class Animal extends LivingBeing {
    eat() {
        console.log("Eating...");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof woof!");
    }
}

// Dog inherits from Animal, which inherits from LivingBeing
const dog = new Dog();
dog.breathe(); // from LivingBeing -> Output: Breathing...
dog.eat();     // from Animal -> Output: Eating...
dog.bark();    // from Dog -> Output: Woof woof!

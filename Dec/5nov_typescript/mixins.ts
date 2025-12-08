// ====================================================
// Mixins
// ====================================================

class Walker {
  walk() {
    console.log("Walking...!");
  }
}

class Swimmer {
  swim() {
    console.log("Swimmming...!");
  }
}

function applyMixins(derivedCtors: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      derivedCtors.prototype[name] = baseCtor.prototype[name];
    });
  });
}

class Human implements Walker, Swimmer {
  walk!: () => void;
  swim!: () => void;
}

applyMixins(Human, [Walker, Swimmer]);

const h = new Human();
h.walk();
h.swim();

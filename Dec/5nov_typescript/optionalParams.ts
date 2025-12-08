// ====================================================
// Optional Parameters
// ====================================================

function greet(name: string, msg?: string): string {
  return msg ? `${msg}, ${name}` : `Hello ${name}`;
}

greet("Rahul");
greet("Rahul", "Hey");

// ====================================================
// Functions with Types
// ====================================================

function displayName(): string {
  return "john";
}

function add(a: number, b: number): number {
  return a + b;
}

type TNumber = number;
function sum(a: TNumber, b: TNumber): TNumber {
  return a + b;
}

class Car {
  brand!: string;
  year!: number | undefined;   // allow undefined explicitly

  constructor(brand: string, year?: number) {
    this.brand = brand;
    this.year = year;
  }

  details(): string {
    return this.year ? `${this.brand}-${this.year}` : this.brand;
  }
}

const c1 = new Car("Yamaha");
console.log(c1.details());

const c2 = new Car("Honda", 2020);
console.log(c2.details());
// ====================================================
// Class with Union Type
// ====================================================
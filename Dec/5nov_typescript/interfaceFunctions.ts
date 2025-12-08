// ====================================================
// Interface for Functions
// ====================================================

interface AddFn {
  (x: number, y: number): number;
}

const addNum: AddFn = (a, b) => a + b;

interface IParam {
  a: number;
  b: number;
}

interface SumFn {
  ({ a, b }: IParam): number;
}

const sumNum = ({ a, b }: IParam): number => a + b;

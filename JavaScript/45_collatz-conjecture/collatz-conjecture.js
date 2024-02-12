//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (num) => {
  if (num <= 0) {
    throw Error("Only positive numbers are allowed");
  }
  let step = 0;
  while (num !== 1) {
    step++;
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = 3 * num + 1;
    }
  }
  return step;
};

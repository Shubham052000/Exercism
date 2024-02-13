//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(num) {
    this.limit = num;
    this.sumOfSq = 0;
    this.sqOfSum = 0;
  }

  get sumOfSquares() {
    for(let i = 1; i<= this.limit; i++){
      this.sumOfSq += i*i;
    }
    
    return this.sumOfSq
  }

  get squareOfSum() {
    for(let i = 1; i<= this.limit; i++){
      this.sqOfSum += i;
    }
    this.sqOfSum *= this.sqOfSum;
    return this.sqOfSum;
  }

  get difference() {
    return this.sqOfSum - this.sumOfSq;
  }
}

export class Squares {
  #value
  constructor(count: number) {
    this.#value = count;
  }

  get sumOfSquares(): number {
    let sum = 0
    for(let i = 1; i<=this.#value; i++){
      sum += i*i
    }
    
    return sum;
  }

  get squareOfSum(): number {
    let sum = 0;
    for(let i = 1; i<=this.#value; i++){
      sum += i;
    }
    return sum* sum;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares
  }
}

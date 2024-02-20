//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(input) {
    this._scores = input;
  }

  get scores() {
    return this._scores
  }

  get latest() {
    return this._scores.at(-1)
  }

  get personalBest() {
    return Math.max(...this._scores)
  }

  get personalTopThree() {
    const sortedScores = this._scores.sort((a, b) => a-b);
    return [sortedScores.at(-1), sortedScores.at(-2), sortedScores.at(-3)]
  }
}

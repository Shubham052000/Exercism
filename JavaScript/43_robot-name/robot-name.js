// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

const LETTERS = [..."QWERTYUIOPASDFGHJKLZXCVBNM"];
const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const ALL_NAMES = [];
LETTERS.forEach((a) => {
  LETTERS.forEach((b) => {
    NUMBERS.forEach((c) => {
      NUMBERS.forEach((d) => {
        NUMBERS.forEach((e) => {
          ALL_NAMES.push([a, b, c, d, e].join(""));
        });
      });
    });
  });
});

const shuffled = ALL_NAMES;

let shuffledPointer = -1;

function shuffleNames() {
  let j;
  let x;
  let i;
  for (i = shuffled.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    x = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = x;
  }
}

function generateName() {
  shuffledPointer += 1;
  if (shuffledPointer > shuffled.length) {
    throw new Error(
      "Can not generate another name because all the names have been used."
    );
  }
  return shuffled[shuffledPointer];
}
// Initial shuffle
shuffleNames();
export class Robot {
  constructor() {
    this._name = generateName();
  }
  get name() {
    return this._name;
  }
  reset() {
    this._name = generateName();
  }
}
Robot.releaseNames = () => {
  shuffledPointer = -1;
};

//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const isPangram = (inputString) => {
  const ALPHABETS = "abcdefghijklmnopqrstuvwxyz".split("")
  const normalizedInput = new Set(inputString.toLowerCase().replaceAll(" ", "").split("").sort((a, b) =>{
    return a>b?1:-1
  }))
  const inputArray = Array.from(normalizedInput)
  for(let i =0; i<inputArray.length; i++){
    ALPHABETS.includes(inputArray[i]) && ALPHABETS.splice(ALPHABETS.indexOf(inputArray[i]), 1)
  }
  return ALPHABETS.length === 0 
};

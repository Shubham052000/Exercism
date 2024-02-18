//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, findFrom) => {
  const anagrams = []
  const wordLower = word.toLowerCase();
  const findFromArrayCleaned = []
  findFrom.map((word) => {
    if(word.toLowerCase() !== wordLower){
      findFromArrayCleaned.push(word)
    }
  });
  
  const wordSorted = wordLower.split('').sort().join('')

  findFromArrayCleaned.forEach((wordFromArray) => {
    if(wordSorted === wordFromArray.toLowerCase().split('').sort().join('')){
      anagrams.push(wordFromArray)
    }
  })
  return anagrams
};

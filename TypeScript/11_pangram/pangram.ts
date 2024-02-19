export function isPangram(input: string): boolean {
  const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('')
  for(let chr of input.toLowerCase()){
    if(LETTERS.includes(chr)){
      LETTERS.splice(LETTERS.indexOf(chr), 1)
    }
  }
  return LETTERS.length === 0
}

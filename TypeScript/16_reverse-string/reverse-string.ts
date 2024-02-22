export function reverse(input: string) {
  let stringToReturn = ''
  for(let i=0; i<input.length; i++){
    stringToReturn = input[i] + stringToReturn;
  }
  return stringToReturn 
}

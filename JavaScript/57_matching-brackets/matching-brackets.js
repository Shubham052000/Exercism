//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (input) => {
  let openingBrackets = '';
  
  for(let i=0; i<input.length; i++){
    if(input[i] === "(" || input[i] === "{" || input[i] === "["){
      openingBrackets += input[i]
    }else if((input[i] === ")" && openingBrackets.at(-1) === "(") || (input[i] === "}" && openingBrackets.at(-1) === "{") ||(input[i] === "]" && openingBrackets.at(-1) === "[") ){
      openingBrackets = openingBrackets.slice(0, openingBrackets.length -1)
    }else if(input[i] === ")" || input[i] === "]" || input[i] === "}"){
      return false;
    }
  }

  return openingBrackets.length === 0
};

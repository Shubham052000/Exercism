//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  let stringToReturn = "";

  if(num%3 === 0){
    stringToReturn+="Pling"
  }
  if(num%5 === 0){
    stringToReturn+="Plang"
  }
  if(num%7 === 0){
    stringToReturn+="Plong"
  }

  return stringToReturn || String(num);
};

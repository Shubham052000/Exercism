//
// This is only a SKELETON file for the 'Eliud's Eggs' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const eggCount = (displayValue) => {
  let numOfEggs = 0
  const binaryString = displayValue.toString(2);
  for(let chr of binaryString){
    if(chr === "1"){
      numOfEggs++;
    }
  }
  return numOfEggs;
};

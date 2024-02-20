//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (inputString) => {
  const inputStringMap = {}
  
  for(let ele of inputString.replace("-", "").replace(" ", "")){
    if(inputStringMap[ele.toLowerCase()]){
      return false
    }else{
      inputStringMap[ele.toLowerCase()] = true
    }
  }
  return true
};

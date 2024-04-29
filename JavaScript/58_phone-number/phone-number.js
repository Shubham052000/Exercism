//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (phoneNum) => {
  let cleanNumber = '';
  
  if(/.*[a-zA-Z].*/g.test(phoneNum) ){
      throw new Error("Letters not permitted")
  }

  if(/.*[@:!].*/g.test(phoneNum) ){
      throw new Error("Punctuations not permitted")
  }
  
  for(let i=0; i<phoneNum.length; i++){
    if(!isNaN(parseInt(phoneNum[i])) ){
      cleanNumber += phoneNum[i]
    }
    
    if(phoneNum[i] === "+"){
      i = phoneNum.indexOf(" ");
    }
  }
  
  if(cleanNumber.length < 10){
    throw new Error("Incorrect number of digits");
  }
  
  if(cleanNumber.length === 11){
    if(cleanNumber[0] !== "1"){
      throw new Error("11 digits must start with 1");
    }else{
      cleanNumber = cleanNumber.slice(1);
    }
  }
  if(cleanNumber.length > 11){
    throw new Error("More than 11 digits")
  }
  if(cleanNumber[0] === "0"){
    throw new Error("Area code cannot start with zero")
  }
  if(cleanNumber[0] === "1"){
    throw new Error("Area code cannot start with one")
  }
  if(cleanNumber[3] === "0"){
    throw new Error("Exchange code cannot start with zero")
  }
  if(cleanNumber[3] === "1"){
    throw new Error("Exchange code cannot start with one")
  }
  return cleanNumber;
};

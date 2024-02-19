//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (input) => {
  let acr = '';
  input = input.replace(",", "").replace("_", "").replace("-", " ").split(" ")
  input.forEach((word) =>  acr += word ? word[0].toUpperCase() : '')
  return acr;
};

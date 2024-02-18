//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (num) => {
  if(num <= 0){
    throw new Error("Classification is only possible for natural numbers.")
  }
  if(num === 1){
    return 'deficient'
  }
  const multiples = [1]
  for(let i=2; i<= num/2; i++){
    if(num%i === 0){
      multiples.push(i);
    }
  }

  const aliquotSum = multiples.reduce((acc, num) => acc + num, 0);

  return aliquotSum === num ? 'perfect' : aliquotSum > num ? 'abundant' : 'deficient'
};

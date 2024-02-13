//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldObj) => {
  const newObj = {};

for(let i in oldObj){
    for(let j of oldObj[i]){
        j = j.toLowerCase();
        newObj[j] = Number(i);
    }
}
  return newObj;
};

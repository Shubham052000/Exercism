//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (rows) => {
  const res = []
  if(rows === 0){
    return res;
  }
  res.push([1]);
  for(let i = 1; i < rows; i++){
    let list = [];
    list.push(1);
    for(let j = 1; j < res[i-1].length; j++){
      let sum = res[i-1][j-1] + res[i-1][j];
      list.push(sum);
    }
    list.push(1);
    res.push(list)
  }
  return res
};

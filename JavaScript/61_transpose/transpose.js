//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (matrix) => {
 let transposed=[];
  for(let i=0;i<matrix.length;i++)
    for (let j = 0; j < matrix[i].length; j++)
    {
      let temp=matrix[i][j];
      let length=0;
        if (transposed[j])
        {
        length = transposed[j].length;
        }
        if (i > length) 
        {
        temp = temp.padStart(i - length + 1, ' ');
        }
      transposed[j] ? transposed[j] += temp : transposed[j] = temp;
    }
  return transposed;
  }

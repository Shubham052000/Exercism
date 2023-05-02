//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixString) {
    this.stringMatrix = matrixString.split('\n')
    this.matrix = []
  }

  constructMatrix(){
     for(let row of this.stringMatrix){
       const newRow = row.split(" ").map((item)=> (Number(item)));
       this.matrix.push(newRow)
     }
  }
  
  
  get rows() {
    this.constructMatrix();
    return this.matrix;
  }

  get columns() {
    this.constructMatrix();
    return this.matrix[0].map((column, index) => this.matrix.map(row => row[index]));
  }
}

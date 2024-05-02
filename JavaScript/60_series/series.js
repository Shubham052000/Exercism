//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if(series.length === 0) throw new Error("series cannot be empty")
    this.series = series.split("");
  }

  slices(sliceLength) {
    if(sliceLength < 0){
      throw new Error("slice length cannot be negative")
    }
    if(sliceLength === 0){
      throw new Error("slice length cannot be zero")
    }
    if(sliceLength > this.series.length){
      throw new Error("slice length cannot be greater than series length")
    }
    const slices = [];
    for(let i=0; i<this.series.length; i++){
      if(this.series.slice(i).length >= sliceLength) slices.push(this.series.slice(i, i+sliceLength).map((str) => Number(str)))
    }
    return slices;
  }
}

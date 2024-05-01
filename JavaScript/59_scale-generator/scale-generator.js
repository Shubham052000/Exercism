//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const SHARPTONIC = "A, A#, B, C, C#, D, D#, E, F, F#, G, G#".split(", ")
const FLATTONIC = "A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab".split(", ")
const returnInSharps = "G, D, A, E, B, F#, e, b, f#, c#, g#, d#, C, a".split(", ")

function getChromaticScale(tonicArray, tonic){
  const chromaticScale = []
  if(tonic.length > 1){
    tonic = tonic[0].toUpperCase() + tonic[1]
  }else{
    tonic = tonic.toUpperCase()
  }
  chromaticScale.push(...tonicArray.slice(tonicArray.indexOf(tonic)))
        if(chromaticScale.length < 12){
            chromaticScale.push(...tonicArray.slice(0, tonicArray.indexOf(tonic)))
        }
  return chromaticScale;
}

export class Scale {
  constructor(tonic) {
    this.tonic = tonic;
  }

  chromatic() {
    let chromaticScale = []
    if(returnInSharps.includes(this.tonic)){
     chromaticScale = getChromaticScale(SHARPTONIC, this.tonic)
    } 
  else{
    chromaticScale = getChromaticScale(FLATTONIC, this.tonic)
  }
    return chromaticScale;
  }

  interval(intervals) {
    const chromaticScale = this.chromatic()
    chromaticScale.push(chromaticScale[0])
    const musicalScale = [chromaticScale[0]];
    let chromaticScaleIndex = 1;
    
    for(let i=0; i<intervals.length; i++){
      if(intervals[i]=== "M"){
        musicalScale.push(chromaticScale[chromaticScaleIndex + 1])
        chromaticScaleIndex+=2
      }
      else if (intervals[i]=== "m"){
        musicalScale.push(chromaticScale[chromaticScaleIndex])
        chromaticScaleIndex++;
      }
      else{
        musicalScale.push(chromaticScale[chromaticScaleIndex + 2])
        chromaticScaleIndex+=3
      }
    }
    return musicalScale
  }
}

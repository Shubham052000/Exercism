export function toRna(dnaStrand: string): string {
  const rnaComplementMap = new Map([['G', 'C'], ['C', 'G'], ['T', 'A'], ['A', 'U']]);
  let rnaComplement = '';
  for (let i = 0; i < dnaStrand.length; i++){
    if(rnaComplementMap.has(dnaStrand[i]))
      rnaComplement += rnaComplementMap.get(dnaStrand[i]);
    else
      throw new Error('Invalid input DNA.')
  }
  return rnaComplement;
}
toRna('C');
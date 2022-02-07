export function decodedValue(colorCodes: Array<string>): number {
  const resistance_values: Array<string> = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
  let resistance = "";
  for(let i = 0; i<2; i++){
    resistance += resistance_values.indexOf(colorCodes[i])
  }
  return Number(resistance)
}

//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = [
  'black',
'brown',
'red',
'orange',
'yellow',
'green',
'blue',
'violet',
'grey',
'white'
]

export const decodedValue = (colorBands) => {
  return Number(`${COLORS.indexOf(colorBands[0])}${COLORS.indexOf(colorBands[1])}`)
};

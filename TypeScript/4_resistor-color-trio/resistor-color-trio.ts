export function decodedResistorValue(arr: Array<string>): string {
  const color_codes = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];
  let resistance = `${color_codes.indexOf(arr[0])}${color_codes.indexOf(
    arr[1]
  )}${"0".repeat(color_codes.indexOf(arr[2]))}`;
  let res = '33000'
if (resistance.slice(-3) === "000")
    return resistance.slice(0, resistance.length - 3) + " kiloohms";
  else return resistance + ' ohms';
  
}

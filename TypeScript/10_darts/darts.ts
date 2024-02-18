export function score(x: number, y: number): number {
  const distanceFromNormal = Math.sqrt(x*x + y*y)
  if(distanceFromNormal <= 1){
    return 10
  }
  if(distanceFromNormal <= 5){
    return 5
  }
  if(distanceFromNormal <= 10){
    return 1
  }
  return 0
}

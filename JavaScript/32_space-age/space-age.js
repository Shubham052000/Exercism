//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const seconds_earth = 31557600;
const seconds_mercury = seconds_earth * 0.2408467;
const seconds_venus = seconds_earth * 0.61519726
const seconds_mars = seconds_earth * 1.8808158
const seconds_jupiter = seconds_earth * 11.862615
const seconds_saturn = seconds_earth * 29.447498
const seconds_uranus = seconds_earth * 84.016846
const seconds_neptune = seconds_earth * 164.79132

export const age = (planet, seconds) => {
  switch(planet){
    case 'mercury':
      return Math.round((seconds/ seconds_mercury)*100)/100
    case 'venus':
      return Math.round((seconds/ seconds_venus)*100)/100
    case 'earth':
      return Math.round((seconds/ seconds_earth) * 100)/100
    case 'mars':
      return Math.round((seconds/ seconds_mars)*100)/100
    case 'jupiter':
      return Math.round((seconds/ seconds_jupiter)*100)/100
    case 'saturn':
      return Math.round((seconds/ seconds_saturn)*100)/100
    case 'uranus':
      return Math.round((seconds/ seconds_uranus)*100)/100
    case 'neptune':
      return Math.round((seconds/ seconds_neptune)*100)/100
  }
};

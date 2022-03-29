/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export const cookingStatus = (timer) => {
  if (timer === 0)
    return ('Lasagna is done.')
  else if (timer === undefined)
    return ('You forgot to set the timer.')
  else
    return ('Not done, please wait.')
}

export const preparationTime = (layers, avgTime = 2) => {
  return layers.length * avgTime
}

export const quantities = (layers) => {
  return {
    noodles: layers.filter(e => e === 'noodles').length * 50,
    sauce: layers.filter(e => e === 'sauce').length * 0.2
  }
}

export const addSecretIngredient = (friendsList, myList) => {
  myList.push(friendsList[friendsList.length - 1])
}

export const scaleRecipe = (recipe, numPeople) => {
  const res = {};
  for (const key in recipe){
    res[key] = recipe[key] * numPeople / 2;
  }
  return res
}

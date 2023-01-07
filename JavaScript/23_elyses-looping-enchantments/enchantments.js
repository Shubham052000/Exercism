// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let numOfTimesCardAppeared = 0;
  stack.forEach((cardInStack) => cardInStack === card && numOfTimesCardAppeared++)
  return numOfTimesCardAppeared;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let numOfOddOrEvenCards = 0;
  if(type){
    for (const number of stack)
      number%2 === 0 && numOfOddOrEvenCards++
    return numOfOddOrEvenCards
  }
  else{
    for (const number of stack)
      number%2 !== 0 && numOfOddOrEvenCards++
    return numOfOddOrEvenCards
  }
}

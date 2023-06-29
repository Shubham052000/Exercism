/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */

const PRICES = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10,
  ExtraSauce: 1,
  ExtraToppings: 2,
}

export function pizzaPrice(pizza, ...extras) {
  let pizzaPrice = PRICES[pizza];
  let addedPrice = extras.reduce((acc, curr)=>{
    return acc + PRICES[curr]
  }, 0)
  return pizzaPrice + addedPrice
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  if(pizzaOrders.length === 0)  return 0

  let price = pizzaOrders.reduce((acc, curr)=>{
    return acc + pizzaPrice(curr.pizza, ...curr.extras)
  }, 0)
  return price;
}

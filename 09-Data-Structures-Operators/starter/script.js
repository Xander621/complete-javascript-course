'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address = ''}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log('mainIngredient :>> ', mainIngredient);
    console.log('otherIngredients :>> ', otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

/**
 * destructuring objects
 */
// const {name, openingHours, categories} = restaurant;
// console.log('name, openingHours, categories :>> ', name, openingHours, categories);

// // rename object properties to local variables 
// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log('restaurantName, hours, tags :>> ', restaurantName, hours, tags);

// // destructure w/ default values
// const { menu = [], starterMenu: starters = []} = restaurant;
// console.log('menu, starters :>> ', menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};

// ({a,b} = obj);
// console.log('a, b :>> ', a, b);

// // nested objects
// const {
//   fri: {open: o, close: c}
// } = openingHours;
// console.log('o, c :>> ', o, c);

/**
 * destructring arrays
 */ 
// console.log(restaurant.order(2, 0));
// const [appetizer, mainCourse] = restaurant.order(2, 0);
// console.log(appetizer, mainCourse);

// // nested array
// const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);

// const [i, ,[j, k]] = nested;
// console.log(i, j, k);

/**
 * Spread Operator
 * Can only be used to build an array or to pass arguments (comma delimited values)
 * to a function
 */
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log('badNewArr :>> ', badNewArr);

// const newArr = [1,2, ...arr];
// console.log('newArr :>> ', newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log('newMenu :>> ', newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join two arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log('menuJoin :>> ', menu);

// // Iterables: arrays, strings, maps, sets, Not objects
// const str = 'Alexander';
// const letters = [...str, ' ', 'L.'];
// console.log('letters :>> ', letters);
// console.log('...str :>> ', ...str);

// const ingredients = [
//   prompt('Let\'s make pasta! Ingredient 1?'),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?')
// ];
// console.log('ingredients :>> ', ingredients);
// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = {foundedIn: '1998', ...restaurant, founder: 'Guiseppe'};
// console.log('newRestaurant :>> ', newRestaurant);

/******************************************************************************
 * Rest Pattern & Parameters
 * Used to pack elements into an array
 *****************************************************************************/
// SPREAD, becuase on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log('arr :>> ', arr);
// REST, becuase on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log('a, b, others :>> ', a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log('pizza, risotto, otherFood :>> ', pizza, risotto, otherFood);

const {fri, ...rest} = restaurant.openingHours;
console.log('rest :>> ', rest);

// Functions & Rest arguments
const add = function(...values){
  console.log('values :>> ', values);
  let value = 0;
  for (let x in values) {
    value += Number(values[x]);
  }
  return value;
}
console.log(add(2, 3));
console.log(add(5, 3, 7, 2));
console.log(add(8, 2, 5, 3, 2, 1, 4));

const x = [23, 5, 7];
console.log(add(...x));

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

/*****************************************************************************/
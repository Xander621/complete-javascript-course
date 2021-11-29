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

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address = '',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log('mainIngredient :>> ', mainIngredient);
    console.log('otherIngredients :>> ', otherIngredients);
  },
};

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

/******************************************************************************
 * destructuring objects
 *****************************************************************************/
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

/*****************************************************************************/

/******************************************************************************
 * destructring arrays
 *****************************************************************************/
// console.log(restaurant.order(2, 0));
// const [appetizer, mainCourse] = restaurant.order(2, 0);
// console.log(appetizer, mainCourse);

// // nested array
// const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);

// const [i, ,[j, k]] = nested;
// console.log(i, j, k);

/*****************************************************************************/

/******************************************************************************
 * Spread Operator
 * Can only be used to build an array or to pass arguments (comma delimited values)
 * to a function
 *****************************************************************************/
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

/*****************************************************************************/

/******************************************************************************
 * Rest Pattern & Parameters
 * Used to pack elements into an array
 *****************************************************************************/
// SPREAD, becuase on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log('arr :>> ', arr);
// // REST, becuase on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log('a, b, others :>> ', a, b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log('pizza, risotto, otherFood :>> ', pizza, risotto, otherFood);

// const {fri, ...rest} = restaurant.openingHours;
// console.log('rest :>> ', rest);

// // Functions & Rest arguments
// const add = function(...values){
//   console.log('values :>> ', values);
//   let value = 0;
//   for (let x in values) {
//     value += Number(values[x]);
//   }
//   return value;
// }
// console.log(add(2, 3));
// console.log(add(5, 3, 7, 2));
// console.log(add(8, 2, 5, 3, 2, 1, 4));

// const x = [23, 5, 7];
// console.log(add(...x));

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

/*****************************************************************************/

/******************************************************************************
 * Short Circuiting (&& and ||)
 * AND and OR Operators w/ non boolean variables
 * Can use ANY data type, return ANY data type, short-circuiting
 *****************************************************************************/
// // With OR when evaluating an expression (truthy/falsy) will return the 1st
// // truety value found, e.g.
// console.log('---- OR ----');
// console.log(3 || 'SomeString');
// // Will return 'SomeString'
// console.log('' || 'SomeString');
// // Will return true,
// console.log(true || 0);
// // Will return null, since both values are falsy will return last evaluated
// console.log(undefined || null);
// // In this example will return 'Hello', since undef, 0, empty string and
// // null are all nullish/falsy values
// console.log(undefined || 0 || '' || null || 'Hello');

// // restaurant.numGuests = 23;
// // NOTE: example will not work with the number 0 since this evaluates falsy
// restaurant.numGuests = 0;

// // Classic if/else
// const guests1 = restaurant.numGuests ? restaurant.numGuests : -1;
// console.log('guests1 :>> ', guests1);

// // Short-circuiting w/ OR
// const guests2 = restaurant.numGuests || -1;
// console.log('guests2 :>> ', guests2);

// // With AND when evaluating an expression (truthy/falsy) will return the 1st
// // falsy value found, e.g.
// console.log('---- AND ----');
// // Will return 0, since this evaluates and short-circuits the && operator
// console.log(0 && 'SomeString');

// // When result of evaluation is truthy, last value is returned
// console.log(7 && 'SomeString');

// // Will return null, since null is a falsy value
// console.log('Hello' && 23 && null && 'SomeString');

// // classic if checking for existance prior to execution of function
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// // with AND, short-circuiting if the 1st expression evaluates false then
// // what is right of the && in the expression will not execute.
// restaurant.orderPizza && restaurant.orderPizza('onions', 'olives');

/*****************************************************************************/

/******************************************************************************
 * The Nullish Coalescing Operator (??)
 ******************************************************************************/
// restaurant.numGuests1 = 0;
// const guests3 = restaurant.numGuests1 || -1;
// console.log('guests3 :>> ', guests3);

// // Nullish: null and undefined (NOT 0 or '')
// const guests3Correct = restaurant.numGuests1 ?? -1;
// console.log('guests3Correct :>> ', guests3Correct);

/*****************************************************************************/

/******************************************************************************
 * [SECTION 9 - 109] Logical Assignment Operations (ES2021)
 ******************************************************************************/
// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // classic evaluation w/ OR
// // // returns rest1.numGuests if truthy, otherwise 10
// // rest1.numGuests = rest1.numGuests || 10;
// // // returns rest2.numGuests if truthy, otherwise 10
// // rest2.numGuests = rest2.numGuests || 10;

// // Logical Assignment
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log('rest1.numGuests :>> ', rest1.numGuests);
// console.log('rest2.numGuests :>> ', rest2.numGuests);

// // Anonymize owner using AND Logical Assignment operator, if left side
// // evaluates to false then right side doesn't happen
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';
// console.log('rest1.owner :>> ', rest1.owner);
// console.log('rest2.owner :>> ', rest2.owner);

/***********************[END OF SECTION 9-109]********************************/

/******************************************************************************
 * [SECTION 9 - 111] Looping Arrays: The for-of Loop
 ******************************************************************************/
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// // entries (Array Iterator) stores an array of the index and string into item
// // Using destructuring of menu.entries() to get variables for the index and
// // the name
// for (const [index, name] of menu.entries()) {
//   console.log(`${index + 1}: ${name}`);
// }

// console.log('menu.entries() :>> ', [...menu.entries()]);

/***********************[END OF SECTION 9-111]********************************/

/******************************************************************************
 * [SECTION 9 - 112] Enhanced Object Literals
 * Using the restaurant object & modifying it a bit to move the openingHours
 * object external to the restaurant object.
 ******************************************************************************/
// // Compute property names instead of writing them out explictly
// const daysOfTheWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [daysOfTheWeek[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [daysOfTheWeek[4]]: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant1 = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   // Before ES6 - had to use key:value pair
//   // openingHours: openingHours,

//   // ES6 Enhanced object literals
//   openingHours,

//   // ES6 don't need a property set w/ function expression
//   // Before ES6
//   // order: function(starterIndex, mainIndex) {
//   //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   // },
//   // ES6 enhanced object literals
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

// };

// console.log('restaurant1 :>> ', restaurant1);
/***********************[END OF SECTION 9-112]********************************/

/******************************************************************************
 * [SECTION 9-113] Optional Chaining (?.)
 ******************************************************************************/
// // Currently no property for 'mon' exists so trying to get the open property
// // causes an error...  This is an example of how using an 3rd
// // party API might cause a bug if things change. So how do we avoid this?
// // Old way
// if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // Using Optional Chaining
// // ?. evaluates the left side 1st and only then evaluates the right side if
// // the left side is not null or undefined... can be chained to test for
// // multiple levels, e.g. checking for opening hours before checking for mon
// console.log(restaurant.openingHours?.mon?.open);

// //Example
// const daysOfTheWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of daysOfTheWeek) {
//   console.log('day :>> ', day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   if(open === undefined) break;
//   if(open === 'closed') {
//     console.log(`On ${day}, we are ${open}`);
//   } else {
//     console.log(`On ${day}, we open at ${open}`);
//   }
// }
//   // Methods - check whether a method exists prior to calling it
//   console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
//   console.log(restaurant.orderRisotto?.() ?? 'Method does not exist');

//   // Arrays - check if array is empty
//   const users = [
//     {name: 'Alex', email: 'alex@lance-technologies.com', phone: '303-555-2222'},
//     {name: 'John', email: 'john@lance-technologies.com'},
//     {name: 'Jane', email: 'jane@lance-technologies.com'},
//   ];

//   console.log(users[0]?.name ?? 'Array empty or name does not exist');
//   console.log(users[1]?.phone ?? 'Array empty or phone does not exist');

/***********************[END OF SECTION 9-113]********************************/

/******************************************************************************
 * [SECTION 9-114] Looping Objects: Object Keys, Values and Entries
 ******************************************************************************/
// // Looping over keys
// for (const key of Object.keys(restaurant.openingHours)) {
//   console.log('key :>> ', key);
// }

// const properties = Object.keys(restaurant.openingHours);
// console.log('properties :>> ', properties);

// // Looping over values
// for (const value of Object.values(restaurant.openingHours)) {
//   console.log('value :>> ', value);
// }

// // Looping over entries
// for (const entry of Object.entries(restaurant.openingHours)) {
//   console.log('entry :>> ', entry);
// }

// // Looping over entries and using destructuring to get open/closing for the restaurant
// for (const [day, { open, close }] of Object.entries(restaurant.openingHours)) {
//   console.log(`On ${day} we open at ${open} and close at ${close}.`);
// }

/***********************[END OF SECTION 9-114]********************************/

/******************************************************************************
 * [SECTION 9-116] Sets
 * Set objects are collections of values. You can iterate through the elements
 * of a set in insertion order. A value in the Set may only occur once; it is
 * unique in the Set's collection.
 ******************************************************************************/
// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// // Notice that only one Pizza is in the Set's collection
// console.log('orderSet :>> ', orderSet);

// // Creates a Set based on the strings characters. Minus one 'l'
// console.log(new Set('Hello'));

// console.log('orderSet.size :>> ', orderSet.size);
// console.log("orderSet.has('Pizza') :>> ", orderSet.has('Pizza'));
// console.log("orderSet.has('Bread') :>> ", orderSet.has('Bread'));

// orderSet.add('Garlic Bread');
// // Again this will not add an additional value for Garlic Bread since it is
// // already part of the Set
// orderSet.add('Garlic Bread');

// orderSet.delete('Risotto');
// console.log('orderSet :>> ', orderSet);

// for (const order of orderSet) console.log('order :>> ', order);

// // delete all elements of a set
// orderSet.clear();

// // Example use case to why you would use a set would be to remove duplicate
// // entries in an array
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// // Using spread operator to iterate over the Set to create a new array staffUnique
// const staffUnique = [...new Set(staff)];
// console.log('staffUnique :>> ', staffUnique);

/***********************[END OF SECTION 9-116]*********************************/

/******************************************************************************
 * [SECTION 9-117] Maps: Fundamentals
 * The Map object holds key-value pairs and remembers the original insertion
 * order of the keys. Any value (both objects and primitive values) may be used
 * as either a key or a value.
 ******************************************************************************/
// const restaurantMap = new Map();
// restaurantMap.set('name', 'Classico Italiano');
// restaurantMap.set(1, 'Firenze, Italy');
// restaurantMap.set(2, 'Lisbon, Portugal');
// console.log('restaurantMap :>> ', restaurantMap);

// restaurantMap
//   .set('categories', [...restaurant.categories])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :)')
//   .set(false, 'We are closed :(');

// console.log('restaurantMap :>> ', restaurantMap);

// console.log('restaurantMap.get(true) :>> ', restaurantMap.get(true));

// // Using boolean evaluation to get Map key-value pair for true/false (for fun)
// // const time = 21; // true
// const time = 8; // false
// console.log(
//   restaurantMap.get(
//     time > restaurantMap.get('open') && time < restaurantMap.get('close')
//   )
// );

// console.log(
//   "restaurantMap.has('categories') :>> ",
//   restaurantMap.has('categories')
// );

// restaurantMap.delete(2);
// console.log('restaurantMap :>> ', restaurantMap);
// console.log('restaurantMap size :>> ', restaurantMap.size);

// // deletes all map key-value pairs
// restaurantMap.clear();

// restaurantMap.set(document.querySelector('h1'), 'Heading');
// console.log('restaurantMap :>> ', restaurantMap);

/***********************[END OF SECTION 9-117]*********************************/

/******************************************************************************
 * [SECTION 9-118] Maps: Iteration
 ******************************************************************************/
// create a new map with some pre-canned data using an array for key-value pairs
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try Again.'],
]);
console.log('question :>> ', question);

// Convert object to map
console.log('openingHours :>> ', Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log('hoursMap :>> ', hoursMap);

// Iteration of question map
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer?'));
const answer = 3;
console.log('answer :>> ', answer);

// Return the true/false map value for the user's answer
console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

/***********************[END OF SECTION 9-117]*********************************/

/******************************************************************************
 * [SECTION BLOCK TEMPLATE]
 ******************************************************************************/

/***********************[END OF SECTION]**************************************/

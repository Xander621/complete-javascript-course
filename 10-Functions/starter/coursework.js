'use strict';

/******************************************************************************
 * [SECTION 10-128] Default Parameters
 ******************************************************************************/
// const bookings = [];

// const createBooking = function(
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
//   ) {
//   // In ES6, default values can be set in the Parameters declaration of the
//   // function instead of ES5 w/ falsey value set default values using 'OR'
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   }
//   console.log('booking :>> ', booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// // skipping a parameter using undefined
// createBooking('LH123', undefined,  1000);

// console.log('bookings :>> ', bookings);

/***********************[END OF 10-128]**************************************/

/******************************************************************************
 * [SECTION 10-129] How Passing Arguments Works: Value vs. Reference
 * Javascript does not pass by reference, only by value.
 ******************************************************************************/
// const flight = 'LH234';
// const passenger = {
//   name: 'Alex Lance',
//   passport: 24739479284,
// }

// const checkIn = function(flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if(passenger.passport === 24739479284) {
//     alert('Check in')
//   } else {
//     alert('Wrong passport!')
//   }
// };

// // checkIn(flight, passenger);
// // console.log('flight :>> ', flight);
// // console.log('passenger :>> ', passenger);

// const newPassport = function(person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// }

// newPassport(passenger);
// checkIn(flight, passenger);

/***********************[END OF 10-129]**************************************/

/******************************************************************************
 * [SECTION 10-130] First-Class and Higher-Order Functions
 ******************************************************************************/
/* FIRST-CLASS FUNCTIONS
 * * Javascript treats functions as first-class citizens, i.e.
 * * this means that functions are treated simply as values
 * * Functions are just another 'type' of object
 * * Store functions in variables or properties:
 * const add = (a,b) => a + b;
 * const counter = {
 *   value: 23,
 *   inc: function() {this.value++;}
 * }
 *
 * * Pass functions as arguments to OTHER functions:
 * const greet = () => console.log('Hello');
 * btnClose.addEventListener('click', greet);
 *
 * * Return fucntions FROM functions
 *
 * * Call methods on functions:
 * counter.inc.bind(someOtherObject);
 */

/* HIGHER-ORDER FUNCTIONS
   * * A Function that receives another function as an argument, that returns a
   *   new function, or both
   * * This is only possible because of first-class functions
   * 
   * 1. Function that receives another function
   * const greet = () => console.log('Hello');
   * // addEventListener function is the higher-order function
   * // greet is a callback function
   * btnClose.addEventListener('click', greet);  
   * 
   * 2. Functions that return new function
   * // count is th higher-order function
   * function count() {
   *  let counter = 0;
   *  return function() {
   *    counter++; 
   *  };
   * }

 /***********************[END OF 10-130]**************************************/

/******************************************************************************
 * [SECTION 10-131] Functions: Accepting Callback Functions
 ******************************************************************************/
// /**
//  * Take a string and return a new string without spaces and lower case
//  * @param {} str
//  * @returns string all lower case and no spacing
//  */
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// /**
//  * Transform the first word to upper case
//  * @param {*} str
//  */
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// /**
//  * Higher order function
//  */
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// const sayHello = function () {
//   console.log('Hello!');
// };

// document.body.addEventListener('click', sayHello);

/***********************[END OF 10-131]**************************************/

/******************************************************************************
 * [SECTION 10-132] Functions: Returning Functions
 ******************************************************************************/
// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// // The above function rewritten w/ just arrow functions - less readable
// const greet2 = greeting => name => console.log(`${greeting} ${name}`);

// const greeter = greet('Hey');
// greeter('Jonas');
// greeter('Steven');
// greet('Hello')('Kevin');
// greet2('Hi')('Bob');
/***********************[END OF 10-132]**************************************/

/******************************************************************************
 * [SECTION 10-133] The call and apply Methods
 ******************************************************************************/
// const lufthansa = {
//   airline: 'lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// lufthansa.book(2354, 'Jonas Schmedtmann');
// lufthansa.book(635, 'Mike Smith');
// console.log('lufthansa :>> ', lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // this will return undefined since it has been pulled out as a function and not
// // attached to the lufthansa object so 'this' is undefined
// // book(23, 'Sarah Williams');

// // using the call method we can set 'this' to eurowings and then use the book
// // function
// book.call(eurowings, 23, 'Sarah Williams');
// console.log('eurowings :>> ', eurowings);

// const swiss = {
//   airline: 'Swiss Airlines',
//   iataCode: 'LX',
//   bookings: [],
// };

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log('swiss :>> ', swiss);

// // or you can just spread flight data using call
// book.call(swiss, ...flightData);
// console.log('swiss :>> ', swiss);

/***********************[END OF 10-133]**************************************/

/******************************************************************************
 * [SECTION 10-134] The bind method
 * The bind() method creates a new function that, when called, has its this 
 * keyword set to the provided value, with a given sequence of arguments 
 * preceding any provided when the new function is called. 
 ******************************************************************************/

// // Examples of using bind to create functions that set the 'this' keyworkd to 
// // the specific airline object.
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// // Here's an example of using bind to set the some arguments (partial application),
// // in this case the flight number
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Marta Cooper');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// // We don't want the 'this' keyword to point to the 'buy' button element so
// // we need to bind to the lufthansa object 
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application -> means presetting parameters/args
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// // Create a function with a preset tax rate of 23%
// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(200));

// // Challenge: rewrite the addVAT function to return a function with the tax rate
// const addTaxRate = (rate) => addTax.bind(null, rate);

// const rate8percent = addTaxRate(0.08);
// console.log(rate8percent(10));


/***********************[END OF 10-134]**************************************/

/******************************************************************************
 * [SECTION 10-136] Immediately Invoked Function Expressions (IIFE)
 * Used when you want a function to be executed only once.  Used w/ Async/Await.
 * 
 ******************************************************************************/
// // This function can be called multiple times, so how do we write it as an IIFE?
// const runOnce = function () {
//   console.log('This will run again');
// }
// runOnce();

// // Wrap as an expression, and immediately call it. This is an IIFE
// (function() {
//   console.log('This will never run again');
// })();

// // As an arrow function.
// (() => console.log('This will ALSO never run again'))();

// // ES6 block example let/const are encapsulated
// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// // console.log(isPrivate); // this is not defince
// console.log(notPrivate);


/***********************[END OF 10-136]**************************************/

/******************************************************************************
 * [SECTION 10-137] Closures
 * A closure is the combination of a function bundled together (enclosed) with 
 * references to its surrounding state (the lexical environment). In other 
 * words, a closure gives you access to an outer function’s scope from an inner 
 * function. In JavaScript, closures are created every time a function is 
 * created, at function creation time.
 ******************************************************************************/
// const secureBooking = function() {
//   let passengerCount = 0;

//   return function() {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   }
// }

// const booker = secureBooking();
// // 1. A function has access to the variable environment (VE) of the execution 
// //    context in which it was created
// // 2. Closure: VE attached to the function, exactly as it was at the time and 
// //    place the function was created.
// booker();
// booker();
// booker();
// /** Simplified definition of a closure
//  * A closure gives a function access to all the variables of its parent
//  * function, even after that parent function has returned. The function keeps
//  * a reference to its outer scope, which preserves the scope chain throughout
//  * time.
//  */
// console.dir(booker);



/***********************[END OF 10-137]**************************************/

/******************************************************************************
 * [SECTION 10-138] More Closure Examples
 ******************************************************************************/
// let f;

// const g = function() {
//   const a = 23;
//   f = function() {
//     console.log(`1st:`, a * 2);
//   };
// };

// const h = function() {
//   const b = 777;
//   f = function() {
//     console.log(`2nd:`, b * 2);
//   };
// };

// g();
// f(); // closure of g()
// console.dir(f);

// // Re-assigning f function
// h();
// f(); // closure of h()
// console.dir(f);


// // Example 2
// const boardPassengers = function(n, wait) {
//   const perGroup = n / 3;

//   setTimeout(() => {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers.`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds.`);
// }

// boardPassengers(180, 5);
/***********************[END OF 10-138]**************************************/

/******************************************************************************
 * [SECTION 10-1##]
 ******************************************************************************/

/***********************[END OF 10-1##]**************************************/

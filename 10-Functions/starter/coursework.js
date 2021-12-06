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
 * [SECTION 10-1##]
 ******************************************************************************/

 
 /***********************[END OF 10-1##]**************************************/
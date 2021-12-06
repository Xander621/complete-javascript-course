'use strict';

/******************************************************************************
 * [SECTION 10-128] Default Parameters
 ******************************************************************************/
const bookings = [];

const createBooking = function(
  flightNum, 
  numPassengers = 1, 
  price = 199 * numPassengers
  ) {
  // In ES6, default values can be set in the Parameters declaration of the 
  // function instead of ES5 w/ falsey value set default values using 'OR'
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price
  }
  console.log('booking :>> ', booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// skipping a parameter using undefined
createBooking('LH123', undefined,  1000);


console.log('bookings :>> ', bookings);

 /******************************************************************************
 * [SECTION 10-1##]
 ******************************************************************************/

 
 /***********************[END OF 10-1##]**************************************/
'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  transactions: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transactions');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const _displayTransactions = function(transactions) {
  containerTransactions.innerHTML = '';
  transactions.forEach((tr, i) => {
    const type = tr > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="transactions__row">
        <div class="transactions__type 
        transactions__type--${type}">${i + 1} ${type}</div>
        <div class="transactions__value">${tr}&#128;</div>
      </div>
    `;
    containerTransactions.insertAdjacentHTML('afterbegin', html);
  });
}

_displayTransactions(account1.transactions);

const _calcBalanceAndDisplay = function(transactions) {
  const bal = transactions.reduce((acc, tr) => {
    return acc + tr;
  }, 0);
  
  labelBalance.textContent = `${bal}\u20AC`;
}

_calcBalanceAndDisplay(account1.transactions);

const _calcSummariesAndDisplay = function(transactions) {
  // Deposits
  const deposits = transactions
    .filter(tr => tr > 0)
    .reduce((acc, tr) => acc + tr, 0);
  labelSumIn.textContent = `${deposits}\u20AC`;
  
  // Withdrawals
  const withdrawals = transactions
    .filter(tr => tr < 0)
    .reduce((acc, tr) => acc + tr, 0);
  labelSumOut.textContent = `${Math.abs(withdrawals)}\u20AC`;

  // Interest 1.2% of deposits if at least 1 euro
  const interest = transactions
    .filter(tr => tr > 0)
    .map(deposit => deposit * 0.012)
    .filter(tr => tr >= 1)
    .reduce((acc, tr) => acc + tr, 0);
  labelSumInterest.textContent = `${interest}\u20AC`;
}

_calcSummariesAndDisplay(account1.transactions);

/**
 * 
 * @param {*} user 
 * @returns string containing 1st lower case letter of each name;first, middle, last. 
 */
 const setUserName = function(user) {
  return user.toLowerCase()
  .split(' ')
  .map((str) => {
    return str.slice(0, 1);
  })
  .join('');
}

/**
 * Add a username to each of the user accounts in the accounts array
 * @param {*} accounts 
 */
const _addUserNameToAccount = function(accounts) {
  accounts.forEach((account) => {
    account.username = setUserName(account.owner)
  })
}

_addUserNameToAccount(accounts);
// console.log(accounts);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const dataJulia1 = [3, 5, 2, 12, 7];
// const dataJulia2 = [9, 16, 6, 8, 3];
// const dataKate1 = [4, 1, 15, 8, 3];
// const dataKate2 = [10, 5, 6, 1, 4];

// const checkDogs = function(dogsJulia, dogsKate) {

//   // 1.
//   const amendedDataJulia = dogsJulia.slice(1, -2);
//   // console.log("Julia's data:", {amendedDataJulia, amendedDataJulia});

//   // 2.
//   const dogAges = amendedDataJulia.concat(dogsKate);

//   // 3.
//   dogAges.forEach((age, i) => {
//     const type = age > 2 ? `an adult, and is ${age} years old` : `still a puppy`;
//     console.log(`Dog number ${++i} is ${type}`);
//   });

// }

// checkDogs(dataJulia1, dataKate1);
// checkDogs(dataJulia2, dataKate2);


// // Map returns new array 
// const eurToUsd = 1.1;
// const transactionsUSD = transactions.map((tr) => {
//   return tr * eurToUsd;
// });

// console.log(transactions);
// console.log(transactionsUSD);

// const transactionDesc = transactions.map((tr, i) => {
//   return `Transaction ${++i}: You ${tr > 0 ? 'deposited' : 'withdrew'} \$${Math.abs(tr)}`;
// });
// console.log(transactionDesc);

// /**
//  * 
//  * @param {*} user 
//  * @returns string containing 1st lower case letter of each name;first, middle, last. 
//  */
// const setUserName = function(user) {
//   return user.toLowerCase()
//   .split(' ')
//   .map((str) => {
//     return str.slice(0, 1);
//   })
//   .join('');
// }

// // console.log(setUserName('Steven Thomas Williams'));

// /**
//  * 
//  * @param {*} accounts 
//  * @returns [] of account owner usernames 
//  */
// const createUserNames = function(accounts) {
//   return accounts.map((account) => {
//     return setUserName(account.owner);
//   });
// };

// console.log(createUserNames(accounts));

// /**
//  * Add a username to each of the user accounts in the accounts array
//  * @param {*} accounts 
//  */
// const _addUserNameToAccount = function(accounts) {
//   accounts.forEach((account) => {
//     account.username = setUserName(account.owner)
//   })
// }

// _addUserNameToAccount(accounts);
// console.log(accounts);

// // map.filter
// const deposits = transactions.filter((tr) => {
//   return tr > 0;
// });

// // challenge create array of only withdrawals
// const withdrawals = transactions.filter((tr) => {
//   return tr < 0;
// });

// console.log(withdrawals);

// //map.reduce
// console.log(transactions.reduce((acc, cur) => {
//   return acc + cur;
// }, 0));

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function(dogAges) {
//   const ageAdjusted = dogAges.map((age) => {
//     return age > 2 ? 16 + age * 4 : age * 2; 
//   })
//   // console.log(dogAges);
//   // console.log(ageAdjusted);
//   const adultDogAges = ageAdjusted.filter((age) => age > 18);
//   // console.log(adultDogAges);
//   return (adultDogAges.reduce((acc, age, i, arr) => {
//     return acc + (age / arr.length);
//   }, 0));
// }

// Coding Challenge #3 
// Chaining calcAverageHumanAge
// const calcAverageHumanAge = function(dogAges) {
//   return dogAges.map((age) => age > 2 ? 16 + age * 4 : age * 2)
//     .filter((age) => age > 18)
//     .reduce((acc, age, i, arr) => {
//     return acc + (age / arr.length);
//   }, 0);
// }
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

const firstWithdrawal = transactions.find(tr => tr < 0);
console.log(transactions);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);


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

/**
 * Updates the UI transactions elements based on the user account provided
 * @param  {} account
 */
const _displayTransactions = function(account) {
  containerTransactions.innerHTML = '';
  account.transactions.forEach((tr, i) => {
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

/**
 * Calculates and displays the account balance based on the user account provided
 * @param  {} account
 */
const _calcBalanceAndDisplay = function(account) {
  account.balance = account.transactions.reduce((acc, tr) => {
    return acc + tr;
  }, 0);
  
  labelBalance.textContent = `${account.balance}\u20AC`;
}

/**
 * Calculates and displays the account summary based on the user account provided
 * @param  {} account
 */
const _calcSummariesAndDisplay = function(account) {
  // Deposits
  const deposits = account.transactions
    .filter(tr => tr > 0)
    .reduce((acc, tr) => acc + tr, 0);
  labelSumIn.textContent = `${deposits}\u20AC`;
  
  // Withdrawals
  const withdrawals = account.transactions
    .filter(tr => tr < 0)
    .reduce((acc, tr) => acc + tr, 0);
  labelSumOut.textContent = `${Math.abs(withdrawals)}\u20AC`;

  // Interest of deposits if at least 1 euro
  const interest = account.transactions
    .filter(tr => tr > 0)
    .map(deposit => deposit * account.interestRate)
    .filter(tr => tr >= 1)
    .reduce((acc, tr) => acc + tr, 0);
  labelSumInterest.textContent = `${interest}\u20AC`;
}


/**
 * Takes a owner string and creates a lowercase username from the first letter of each word
 * @param {*} 
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
 * Add a username to each of the user accounts objects listed in the accounts array
 * @param {*} accounts 
 */
const _addUserNameToAccount = function(accounts) {
  accounts.forEach((account) => {
    account.username = setUserName(account.owner)
  });
}

// Populate usernames to the individual account objects
_addUserNameToAccount(accounts);

const _updateUI = function(account) {
      // Display transactions
      _displayTransactions(account);

      // Display balance
      _calcBalanceAndDisplay(account);

      // Display summary
      _calcSummariesAndDisplay(account);
}

// SECTION 158: Implementing Transfers
// Event handlers
let _currentAccount;

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();  // prevent form from submitting

  _currentAccount = accounts.find(account => account.username === inputLoginUsername.value);
  if (typeof _currentAccount == 'undefined') {
    console.log(`ERROR: Username ${inputLoginUsername.value} doesn't exist...`);
    labelWelcome.textContent = `ERROR: Username ${inputLoginUsername.value} not recognized.`;
    containerApp.style.opacity = 0;
  } else {
    // using optional chaining, only check for a pin if the currentAccount is defined
    if(_currentAccount?.pin === Number(inputLoginPin.value)) {
      // Display UI and message
      labelWelcome.textContent = `Welcome back, ${_currentAccount.owner.split(' ')[0]}`;
      containerApp.style.opacity = 100;

      // Clear input fields
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginUsername.blur();
      inputLoginPin.blur();

      _updateUI(_currentAccount);
    }
  }
});

// SECTION 159: Implementing Transfers
btnTransfer.addEventListener('click', (event) => {
  event.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const payeeAcc = accounts.find(account => account.username === inputTransferTo.value);
  console.log(amount, payeeAcc);
  console.log(_currentAccount);

  if(amount > 0 && 
    payeeAcc &&
    _currentAccount?.balance >= amount && 
    payeeAcc?.username !== _currentAccount.username) {
  
    // update payer & payee accounts
    _currentAccount.transactions.push(-amount);
    payeeAcc.transactions.push(amount);
    
    // update UI
    _updateUI(_currentAccount);
  } else {
    console.log(`ERROR: Can\'t transfer ${amount} to ${inputTransferTo.value}`);
  }
  // cleanup Transfer UI elements
  inputTransferTo.value = inputTransferAmount.value = '';
});

// SECTION 161: some and every methods
btnLoan.addEventListener('click', (event) => {
  event.preventDefault();

  const amount = Number(inputLoanAmount.value);

  // calculate loan amount from 10% of a deposited amount
  if(amount > 0 && _currentAccount.transactions.some(transaction => transaction >= amount * 0.1)) {
    console.log(`loan request approved for \$${amount}`);
    _currentAccount.transactions.push(amount);
    _updateUI(_currentAccount);
  } else {
    console.log(`loan request denied for \$${amount}`);
  }
  
  // cleanup inputs
  inputLoanAmount.value = '';

});

// SECTION 160: The findIndex Method
btnClose.addEventListener('click', (event) => {
  event.preventDefault();

  if (inputCloseUsername.value === _currentAccount?.username && 
    Number(inputClosePin.value) === _currentAccount?.pin) {

    console.log(`DELETING ACCOUNT FOR: ${_currentAccount.username}`);
    const index = accounts.findIndex( account => account.username === _currentAccount.username);

    // delete account at index
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  } 
  // cleanup inputs
  inputCloseUsername.value = inputClosePin.value = '';
});

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


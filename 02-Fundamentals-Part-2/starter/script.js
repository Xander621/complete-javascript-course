"use strict";

// console.log();
// console.log(`******************************************************************`);
// console.log(`*                        Coding Challenge 1                      *`);
// console.log(`******************************************************************`);
// console.log();
/**
 * Coding Challenge #1
 * 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
 * 2. Use the fucntion to calculate the average for both teams
 * 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas')
 *    and then logs the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
 * 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
 * 5. Ignore draws this time
 *
 * TEST DATA 1: Dolphins score 44, 23, and 71
 *              Koalas score 65, 54, and 49
 *
 * TEST DATA 2: Dolphins score 85, 54, 41
 *              Koalas score 23, 34 and 27
 */

// // arrow function calcAverage
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // calculate averages for both teams
// const avgScoreDolphins1 = calcAverage(44, 23, 71);
// console.log(` Dolphins TEST DATA 1 AVG: ${avgScoreDolphins1}`);

// const avgScoreDolphins2 = calcAverage(85, 54, 41);
// console.log(` Dolphins TEST DATA 2 AVG: ${avgScoreDolphins2}`);

// const avgScoreKoalas1 = calcAverage(65, 54, 49);
// console.log(` Koalas TEST DATA 1 AVG: ${avgScoreKoalas1}`);

// const avgScoreKoalas2 = calcAverage(23, 34, 27);
// console.log(` Koalas TEST DATA 2 AVG: ${avgScoreKoalas2}`);

// // function checkWinner
// function checkWinner(scoreDolphins, scoreKoalas) {
//   if (scoreDolphins >= 2 * scoreKoalas) console.log(`Dolphins win ${scoreDolphins} vs. ${scoreKoalas}`);
//   else if (scoreKoalas >= 2 * scoreDolphins) console.log(`Koalas win ${scoreKoalas} vs. ${scoreDolphins}`);
//   else console.log(`No team wins...`);
//   return 0;
// }

// // Determine winner for both data sets.
// checkWinner(avgScoreDolphins1, avgScoreKoalas1);
// checkWinner(avgScoreDolphins2, avgScoreKoalas2);

// console.log();
// console.log(`******************************************************************`);
// console.log(`*                        Coding Challenge 2                      *`);
// console.log(`******************************************************************`);
// console.log();
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
*/

console.log();
console.log(`******************************************************************`);
console.log(`*                        Coding Challenge 4                      *`);
console.log(`******************************************************************`);
console.log();
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for 
   every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

// setup static bills array
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// setup empty arrays
let tips = [];
let totals = [];

// Tip Calculator
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// collect all tips for bills array
for (let i in bills) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log(`Here ar the tips`);
console.log(tips);
console.log(`Here are the totals`);
console.log(totals);

const calcAverage = function (totalsArray) {
  let sum = 0;
  for (let i in totalsArray) {
    sum += totalsArray[i];
  }
  //   console.log(`totals array is ${totalsArray.length} in length`);
  return sum / totalsArray.length;
};

console.log(`Here is the bill average: \$${calcAverage(totals)}`);

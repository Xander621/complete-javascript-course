"use strict";

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

// arrow function calcAverage
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// calculate averages for both teams
const avgScoreDolphins1 = calcAverage(44, 23, 71);
console.log(` Dolphins TEST DATA 1 AVG: ${avgScoreDolphins1}`);

const avgScoreDolphins2 = calcAverage(85, 54, 41);
console.log(` Dolphins TEST DATA 2 AVG: ${avgScoreDolphins2}`);

const avgScoreKoalas1 = calcAverage(65, 54, 49);
console.log(` Koalas TEST DATA 1 AVG: ${avgScoreKoalas1}`);

const avgScoreKoalas2 = calcAverage(23, 34, 27);
console.log(` Koalas TEST DATA 2 AVG: ${avgScoreKoalas2}`);

// function checkWinner
function checkWinner(scoreDolphins, scoreKoalas) {
  if (scoreDolphins >= 2 * scoreKoalas) console.log(`Dolphins win ${scoreDolphins} vs. ${scoreKoalas}`);
  else if (scoreKoalas >= 2 * scoreDolphins) console.log(`Koalas win ${scoreKoalas} vs. ${scoreDolphins}`);
  else console.log(`No team wins...`);
  return 0;
}

// Determine winner for both data sets.
checkWinner(avgScoreDolphins1, avgScoreKoalas1);
checkWinner(avgScoreDolphins2, avgScoreKoalas2);

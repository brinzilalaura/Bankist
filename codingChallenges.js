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

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);
  //alternative with SLICE 
  dogsJulia.slice(1, 3);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
  //Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
  dogs.forEach(function (dog, i) {
    if (dog >= 3) console.log(`Dog number ${i} is an adult, and is ${dog} years old`);
    else console.log(`Dog number ${i} is still a puppy 🐶`);
  });
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);





//////////////////////////
////////////////////////////////

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


//positiv values = assets and negative withdraw
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


//The Map method - in modern JS this is the way to go
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

//map method with arrow function
const movementsUSD = movements.map(mov => mov * eurToUsd);


console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) => {
  `Movement ${i + 1}: You ${mov > 0} ? 'deposited'${mov}: 'withdrew' ${Math.abs(mov)} `;
  // if (movement > 0) {
  //   console.log(`Movement ${ i + 1 }: You deposited ${ movement } `);
  // } else {
  //   console.log(`Movement ${ i + 1 }: You withdrew ${ Math.abs(movement) } `);
  // }
});
console.log(movementsDescriptions);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


// let arr = ['a', 'b', 'c', 'd'];
// //new array SPLICE
// console.log(arr.slice[2]);
// console.log(arr.slice[2, 4]);
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// //spread operator
// console.log([...arr]);

// //SPLICE
// //  console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);

// //REVERSE 
// arr = ['a', 'b', 'c', 'd'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr]);

// //JOIN
// console.log(letters.join('-'));



//accumulator => snowball
// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`Iteration ${i} + ${acc} `);
//   return acc + curr;
// }, 0);
// console.log(balance);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

//coding challenge 2
/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;


  return average;
};

const avrg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avrg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/

//challenge 3 
const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;


  return average;
};

const calcAverageHumanAge = ages =>
  ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);



const avrg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avrg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avrg1, avrg2);


//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement} `);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)} `);
  }
}
//loop over the array and at witch iteration, callback function wil be executed 
console.log('----FOREACH----');

// 1 paramether is the curent element, second the current index, 3td one is the entire array that we are loop over
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov} `);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)} `);
  }
});
// 0: function(200)
//1: function(450)
//2: function(400)
//...

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value} `);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
//_ throw away variable
console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${ key }: ${ value } `);
// })


const eurToUsd = 1.1;

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

console.log(movements);


const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

//Event hendler 



// const eurToUsd = 1.1;
// //PIPELINE 
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce(acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(account1);


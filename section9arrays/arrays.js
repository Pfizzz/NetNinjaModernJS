// Array methods

// FILTER METHOD

// non-destructive
// filters out items based on a condition
// iterates an array and performs a check on each item in the array inside a callback function
// if the check passes, the item is kept inside of the array.

const scores = [10, 30, 15, 25, 50, 40, 5];

const filteredScores = scores.filter(score => {
    return score > 20;
})

console.log(filteredScores);

//

const users = [
    {name: 'shuan', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];

const filteredUsers = users.filter(user => user.premium);

console.log(filteredUsers);


// MAP METHOD

// non-destructive
// takes an array, iterates through, and returns an updated value for each item in the array
// into a new array.
// performs a callback function

const prices = [20, 10, 30, 25, 15, 40, 80, 5];
// new array will be 'salePrices' (this is simplified es6)
const salePrices = prices.map(price => price / 2);
// new array will be the prices divided by 2.
console.log(salePrices);

//

// to change price only if price is over 30 originally
const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];

const saleProducts = products.map(product => {
    if(product.price > 30){
        return {name: product.name, price: product.price / 2}
    } else {
        return product;
    }
});
// prices for mushroom and red shells have been halved.
console.log(saleProducts, products);


// REDUCE METHOD

// returns any single value you want based on values in the array we iterate over
// fires a callback function
// returns a single value based on the accumulator (acc)
const redScores = [10, 20, 60, 40, 70, 90, 30];

// to return how many scores are over 50 (returns a number, not an array)
// acc = accumulator. think of it like a running total

const redResult = redScores.reduce((acc, curr) => {
 if(curr > 50){
     acc++;
 }
 return acc;
}, 0)
// the sceond argument /0\ is the initial value of the accumulator. 
// logs "3"
console.log(redResult);

// 

const redScores2 = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 60},
    {player: 'crystal', score: 60}
];

// to add up total score of ONLY mario:
const marioScore = redScores2.reduce((acc, curr) =>{
    if(curr.player === 'mario'){
        acc += curr.score;
    }
    return acc;
}, 0);
// will log 110, the combined sum of mario's scores.
console.log(marioScore);


// FIND METHOD

// returns the value of the first element inside an array that passes a certain test after a callback function.
// the method stops after it finds the first one.

const findScores = [10, 5, 0, 40, 60, 10, 20, 70];

// to find the first score over 50:
// if return of true, its done. if false, continues iterating to next value
// const firstHighScore = findScores.find((score) => {
//     return score > 50;
// });

// can be simplified:
const firstHighScore = findScores.find(score => score > 50);

// prints 60, the first instance of a score over 50.
console.log(firstHighScore)


// SORT METHOD
// when we want to rearrange an array in a particular way
// alphabetical, by property, etc
// destructive

// ex. 1: sorting strings
// to sort by alphabetical order
const sortNames = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
// sort() has an in-built algorithm that automatically sorts strings alphabetically.
// does NOT create a new array. it directly alters the original array
sortNames.sort();
console.log(sortNames);

// REVERSE()
sortNames.reverse();
// running these back to back will alphabetize and reverse them!
console.log(sortNames);

// ex 2: sorting numbers
// sort() by default only looks at the first numbers of each value. This is a problem.
const sortScores = [10, 50, 20, 5, 35, 70, 45];

// sortScores.sort();
// console.log(sortScores);
// sortScores.reverse();
// console.log(sortScores);

// to sort this properly using a comparison function:
// refer below to explanation of comparison function
sortScores.sort((a,b) => b -a);
console.log(sortScores);
// to reverse by chaining methods: (or you can just swap b and a around.)
sortScores.sort((a,b) => b - a).reverse();
console.log(sortScores);


// ex 3: sorting objects

// to sort by highest score:
const sortPlayers = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70}
];

// players.sort() will not work because the algorithm will not automatically know what to sort by.
// we need to provide a function as an argument to the sort method.
// this function will compare values within an array to sort them.
// called a "compare function": 
// takes two parameters that represent two consecutive elements inside the array
// inside the function, we compare a and b and decide which one will come first.
// to do this, we need the function to return a value of either zero or a positive of negative number.
// if A should come first, we return a negative number, ie -1.
// if B should come first, we return a positive number, ie +1.
// if they are the same or no reordering is needed, we return 0.

// we fire a callback function of each pair of elements inside the array.
// if a.score is greater than b.score, we want it to avaluate 'true', because we dont need to reorder things.
// so it should return a -1.
// else, if b.score is greater than a.score, then we need to rearrange them because we want the highest score to come first.
// so it returns a 1.
// else, return a zero, because no reordering is needed.
// sortPlayers.sort((a,b) => {
//     if(a.score > b.score){
//         return -1;
//     } else if (b.score > a.score){
//         return 1;
//     } else {
//         return 0;
//     }
// });

console.log(sortPlayers);
// logs a sort of the players in order of highest score.

// we can do a shorter version:
// sortPlayers.sort((a,b) => {
//     return b.score - a.score;
// });

// which can be simplified down to:
sortPlayers.sort((a,b) => b.score - a.score);

console.log(sortPlayers);

//this works, because if b.score (the SECOND in the pair) is greater than a.score, it returns a positive number, which means it must be sorted.
// if b.score is LESS than a.score, it will return a negative number, and doesn't have to move.
// if they're 0, they dont have to move either.
// this is tricky but makes sense when you think about it long enough and use the original array as a visual aid.


// CHAINING ARRAY METHODS

const chainProducts = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
];

// filter out any product that isnt over 20 in price.
// take that filtered array and map it to a new array of product names formatted with a sale price.

// first we use filter(). True or false? the product is greater than 20. If true, it's KEPT in the array.
const filtered = chainProducts.filter(product => product.price > 20);
// then we map the products to a new array with a template string and the sale price.
const promos = filtered.map(product => {
    return `The ${product.name} is on sale for ${product.price / 2} pounds.`
})
console.log(promos);

// a quicker way to do this is with method chaining.
// because both methods work on arrays, we can chain them.

const chainPromos = chainProducts
    .filter(product => product.price > 20)
    .map(product => `The ${product.name} is on sale for ${product.price / 2} pounds.`);

console.log(chainPromos);
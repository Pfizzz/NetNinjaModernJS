// SECTION 11 - DATES AND TIMES

// dates and times
const now = new Date();

console.log(now);
// prints 'object'
console.log(typeof now);

// year, months, day, times
console.log('getFullYear:', now.getFullYear());
const yearTest = now.getFullYear();
console.log(`This year is ${yearTest}.`)
// gets position of the month in an imaginary array of months (january is 0)
console.log('getMonth:', now.getMonth());
// prints accurate date, ie 23
console.log('getDate:', now.getDate());
// thursday is "4" in array
console.log('getDay:', now.getDay());
// accurate
console.log('getHours:', now.getHours());
// accurate
console.log('getMinutes:', now.getMinutes());
// accurate
console.log('getSeconds:', now.getSeconds());

// Date Strings

// Thu Jan 13 2022
console.log(now.toDateString());
// 21:43:52 GMT-0500 (Eastern Standard Time)
console.log(now.toTimeString());
// 1/13/2022, 9:44:50 PM
console.log(now.toLocaleString());


// timestamps
// represented as a date by the number of milliseconds since 1/1/1970
// allows us to compare two dates together
console.log('timestamp', now.getTime());


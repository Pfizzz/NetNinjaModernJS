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

// to create a date in the past:
const before = new Date('December 1 2021 7:30:59');
const timeNow = new Date();

console.log(before.getTime());
console.log(timeNow.getTime());

// so subtract the difference.
const diff = timeNow.getTime() - before.getTime();

console.log(diff);
// difference in minutes:
const mins = Math.round(diff / 1000 / 60);
console.log('minutes', mins);
// difference in hours:
const hours = Math.round(mins / 60);
console.log('hours', hours);
// difference in days:
const days = Math.round(hours / 24);
console.log('days', days);
// difference in years (sort of)
const years = days / 365;
console.log('years', years);

console.log(`the blog was written ${days} days ago.`);

// converting timestamps into date objects
const timestam = 1642129816573;
// when you pass a timestamp into the Date() object, it converts it into a date
// prints 'Thu Jan 13 2022 22:10:16 GMT-0500 (Eastern Standard Time)'
console.log(new Date(timestam));

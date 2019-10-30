// Edabit Practice

/* PRACTICE PROBLEM #1 */

// #1 .indexOf()

const cereals = ['trix', 'cheerios', 'lucky charms', 'fruity pebbles', 'cocoa puffs'];

function search(arr, item) {
    return arr.indexOf(item);
}

console.log(search(cereals, 'lucky charms')); // 2 is the answer because it is the 2nd value in the array

/*====================================================*/

/* PRACTICE PROBLEM #2 */

// #2 Leap Year

/* A leap year has one day added to February for being synchronized with the seasonal year. A leap year appears with a regular frequency, which is determined by the rule below:

The year is exactly divisible by 400, or exactly divisible by 4 and not exactly divisible by 100.

Given a year you must implement a function that returns true if it's a leap year, or false if it's not. */

function isLeap(year) {
	return (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) ? true: false
}

console.log(isLeap(2009));

/*====================================================*/

/* PRACTICE PROBLEM #3 */


/* Given an array of numbers, negate all elements contained within.

    Negating a positive value -+n will return -n, because all +'s are removed.
    Negating a negative value --n will return n, because the first - turns the second minus into a +. */


/*====================================================*/

/* PRACTICE PROBLEM #4 */


/* Create a function that checks if the argument is an integer or a string. Return int if it's an integer and str if it's a string. */

function intOrString(param) {
	return typeof param === "string" ? "str" : "int"
}


 

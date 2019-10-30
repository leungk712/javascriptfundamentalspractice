// Practice #1

const apple = "apple";

let appleChange = apple.toUpperCase().split("").reverse().join("");

console.log(appleChange);

// Practice #2

function XO(str){
    let string = str.toLowerCase().split("");
    return string.filter(x => x === "x").length === string.filter(o => o === "o").length;
}

// CodeWars Solution

// const XO = str => {
//     str = str.toLowerCase().split('');
//     return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }

console.log(XO('xoxoox'));

// Practice #3 

/* Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5 */

function litres(time) {
    return Math.floor(time * 0.5);
  }

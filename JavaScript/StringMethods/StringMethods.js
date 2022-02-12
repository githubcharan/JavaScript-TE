console.log('-----------String methods----------');

console.log('-----------toUpperCase----------');

const str = 'Hello'
str.toUpperCase()
    //converts your string to uppercase 
console.log(str); //Hello
//bcz primitives are immutable
const result = str.toUpperCase()
console.log(result); //HELLO

let str1 = 'srini'
const ram = str1.toUpperCase()
console.log(ram)

console.log('-----------toLowerCase----------');

//converts your string to Lowercase 
let greet = 'Good Afternoon'
greet = greet.toLowerCase()
console.log(greet); //good afternoon

console.log('-----------CharAt----------');
//returns the character present at the provided index number
console.log(greet.charAt(13)); //n

console.log('-----------indexOf----------');
//returns the position of the 1st occurance of a specified value in a string
//if no value found returns -1
//String.indexOf(searchvalue,start position )
console.log(greet.indexOf('o', 3)); //11

console.log('-----------concat----------');

const res = str.concat(' , ', greet, ' all')
console.log(res); //Hello , good afternoon all

console.log('-----------includes----------');

const hasNoon = greet.includes('noon') //true
console.log(hasNoon);

console.log('-----------replace----------');

const value = greet.replace('afternoon', 'night')
console.log(value); //good night

console.log('-----------substr----------');

const data = 'Hello all Welcome to Java Script Session'
const extractedstr = data.substr(10, 11)
console.log(extractedstr); //Welcome to

console.log('-----------substring----------');

//end is not inclusive
const substrVal = data.substring(1, 4)
console.log(substrVal); //ell

console.log('-----------trim----------');

const email = '             CharanTeja@testyantra.com            '
console.log('email: ', email);
const emailAfterTrim = email.trim();
console.log(emailAfterTrim);

console.log('trimstart  ', email.trimStart()); // CharanTeja@testyantra.com           
console.log('trimEnd  ', email.trimEnd()); //           CharanTeja@testyantra.com
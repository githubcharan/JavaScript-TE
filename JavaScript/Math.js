console.log('-----------Math Object----------');

//to find maximum
var maxVal = Math.max(10, 20, 30, 45, 49, 1);
console.log('Maximum value: ', maxVal);

//to find minimum
var minVal = Math.min(10, 20, 30, 45, 49, 1);
console.log('Minimum value:', minVal);

//to find power
var powVal = Math.pow(2, 2);
console.log('Power of  2,2:', powVal);

var powVal1 = Math.pow(55, 5);
console.log('Power of 55,5:', powVal1);

console.log(Math.abs(-123)); //123
console.log(Math.ceil(1.3)); //2
console.log(Math.floor(1.4)); //1
console.log(Math.random()); //returns a random number b/n 0-1 (but except) 1  
console.log(Math.sqrt(4)); //2
console.log(Math.round(4.48)); //4
console.log(Math.round(Math.random() * 100)); //returns a random number 0-99
console.log('random number b/n 0-100: ', Math.ceil(Math.random() * 100)); //returns a random number b/n 0-100
console.log('random number b/n 0-99: ', Math.floor(Math.random() * 100)); //returns a random number b/n 0-99

console.log('--------printing names randomly--------');

var names = ['Ram', 'Charan', 'Teja', 'Sasi', 'Madhav', 'Sai', 'Leela', 'Srinivas', 'JV', 'Shanmuk', 'Aravindh', 'Geetha', 'Ashrith']
var randomIndex = Math.floor(Math.random() * names.length);
console.log(names[randomIndex]);
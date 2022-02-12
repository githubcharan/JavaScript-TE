console.log('---------Data Types---------');

console.log('---------Primitive Data Types---------');

console.log('---------String---------');

console.log(typeof('Charan'));
console.log(typeof("Teja"));

console.log('---------Number---------');

console.log(typeof(1));
console.log(typeof(20.50));

console.log('---------Boolean---------');

const a = 5;
const b = 5;
const isvalid = false;
console.log(typeof(a == b));
console.log(typeof(isvalid));

console.log('---------undefined---------');

let A;
console.log(typeof(A));
let age;
console.log(typeof(age))

console.log('---------null---------');
const B = null;
console.log(typeof(B)); //typeof null is object

const c = null;
console.log(c); //null
console.log(typeof(c)); //object

console.log('---------BigInt---------');

console.log(typeof(BigInt(1)));
console.log(typeof(BigInt(20)));

console.log('---------Symbol---------');

const s1 = Symbol();
console.log(typeof(s1));
const s2 = Symbol('click');
console.log(typeof(s2));


console.log('---------Reference Data Types---------');

console.log('--------object---------');
const arr = [1, 2, 3];
console.log(typeof(arr));

const p = { n: 'a', A: 25 }
console.log(typeof(p));
console.log('-----------Array withot new keyword with all data types---------');
console.log('--(1)--');

const person = ['Charan', 25, true, null, undefined, { color: 'white' }]
for (let i = 0; i < person.length; i++) {
    console.log(person[i]);
}

console.log('--(2)--');

const Book = ['Chetan Bhagat', 80, false, null, undefined, { publisher: 'Charan' }]
for (let i = 0; i < Book.length; i++) {
    console.log(Book[i]);
}

console.log('--(3)--');

const Mobile = ['Mi 10i', 25000, true, null, undefined, { Manufacture: 'Xiaomi' }]
for (let i = 0; i < Mobile.length; i++) {
    console.log(Mobile[i]);
}

console.log('--(4)--');

const Car = ['Audi', 5000000, true, null, undefined, { location: 'Germany' }]
for (let i = 0; i < Car.length; i++) {
    console.log(Car[i]);
}

console.log('--(5)--');

const Bike = ['Hero Honda', 75000, false, null, undefined, { Brand: 'Hero' }]
for (let i = 0; i < Bike.length; i++) {
    console.log(Bike[i]);
}

console.log('----------Array with new keyword with all data types-------------');

console.log('--(1)--');

const PERSON = new Array('Charan', 25, true, null, undefined, { color: 'white' })
for (let i = 0; i < PERSON.length; i++) {
    console.log(PERSON[i]);
}

console.log('--(2)--');

const BOOK = ['Chetan Bhagat', 80, false, null, undefined, { publisher: 'Charan' }]
for (let i = 0; i < BOOK.length; i++) {
    console.log(BOOK[i]);
}

console.log('--(3)--');

const MOBILE = ['Mi 10i', 25000, true, null, undefined, { Manufacture: 'Xiaomi' }]
for (let i = 0; i < MOBILE.length; i++) {
    console.log(MOBILE[i]);
}

console.log('--(4)--');

const CAR = ['Audi', 5000000, true, null, undefined, { location: 'Germany' }]
for (let i = 0; i < CAR.length; i++) {
    console.log(CAR[i]);
}

console.log('--(5)--');

const BIKE = ['Hero Honda', 75000, false, null, undefined, { Brand: 'Hero' }]
for (let i = 0; i < BIKE.length; i++) {
    console.log(BIKE[i]);
}
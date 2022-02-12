console.log('-----for in loop-------');

console.log('----Array------');

const numbers = [10, 256, 35, 14, 645, 96]
const names = ['Charan', 'Teja', 'Sai', 'Madhav', 'Sasi', 'Chandra', 'Adithya']
const courses = ['Java', 'Python', 'C', 'C++', 'HTML', 'CSS', 'JavaScript']

console.log('--01--');
for (const index in numbers) {
    console.log(`index of ${index} - ${numbers[index]}`);
}
console.log('--02--');

for (const index in names) {
    console.log(`index of ${index} - ${names[index]}`);
}
console.log('--03--');

for (const index in courses) {
    console.log(`index of ${index} - ${courses[index]}`);
}

console.log('----Object------');

const person = {
    firstname: 'Charan',
    lastname: 'Teja',
    age: 25,
    gender: 'Male'
}
const pen = {
    brand: 'parker',
    color: 'Black',
    price: 125,
    Type: 'Ball Point Pen'
}
const Car = {
    name: 'Audi',
    Model: 'v8',
    color: 'Blue',
    Price: 5000000
}
console.log('--01--');
for (const key in person) {
    console.log(`${key} - ${person[key]}`);
}
console.log('--02--');
for (const key in pen) {
    console.log(`${key} - ${pen[key]}`);
}
console.log('--03--');
for (const key in Car) {
    console.log(`${key} - ${Car[key]}`);
}


console.log('-----for of loop-------');

console.log('----Array------');

console.log('--01--');
for (const number of numbers) {
    console.log('Number: ', number);
}
console.log('--02--');
for (const Name of names) {
    console.log('Name:', Name);
}
console.log('--03--');
for (const Course of courses) {
    console.log('Course:', Course);
}
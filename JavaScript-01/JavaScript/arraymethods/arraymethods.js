

// Function / method 

// 1. Parameters 
// 2. What it returns
// 3. Functionality of the function/method

// push 
// 1. any primitive or reference type
// 2. length of the array
// 3. adds the element after the last index

const hobbies = ['Sleeping', 'Coding', 'Trekking', 'Bird Watching']
console.log('----------push-----------');
const hobbiesLength = hobbies.push('Reading')
console.log('Hobbies after push ', hobbies);   // ['']
console.log('hobbiesLength', hobbiesLength);

console.log('hobbies ', hobbies.push('Cooking'));

console.log(hobbies);
console.log('-----------pop-------------');
const deletedElement = hobbies.pop()
console.log('hobbies after pop', hobbies);
console.log('deletedElement', deletedElement);

console.log('---------forEach----------');
hobbies.forEach(function (value, index, arr) {
    console.log(`${index}- ${value}`);
})

console.log('---------------------------');
// Adds element at start of the array
const lenOfHobbies = hobbies.unshift('Gaming')
console.log('hobbies after unshift', hobbies);
console.log('hobbies length after unshift', lenOfHobbies);
console.log('------------------------');
// removes the element at start of the array
const deletedHobby = hobbies.shift()
console.log('hobbies after shift', hobbies);
console.log('deleted hobby after shift ', deletedHobby);

console.log('--------------------------------------');

console.log('type of hobbies', typeof (hobbies));

// isArray returns true is its array else returns false
const isHobbiesArray = Array.isArray(hobbies)
console.log('isHobbiesArray ', isHobbiesArray);

console.log('------------------------------');

console.log(hobbies);

// checks whether element is present or not, 
// if present returns true else returns false
const isCodingPresent = hobbies.includes('Coding')
console.log('isCodingPresent ', isCodingPresent);

// checks whether element is present or not,
//if present returns the index of element else returns -1
const indexOfReading = hobbies.indexOf('Reading')
console.log('Index of Reading', indexOfReading);

console.log('--------------------------------');

// splice method
const numbers = [10, 20, 30, 40, 50]
const deletedElements = numbers.splice(2, 2, 60, 70, 80)
console.log('deletedElements', deletedElements) // 30, 40 
console.log('numbers ', numbers)  // 10, 20,60,70,80,50 
console.log('---------------------------');
// if we want to only add elements without deleting
// pass delete count as 0(second parameter)
const deletedElements1 = numbers.splice(1, 0, 100, 110)
console.log('deletedElements1', deletedElements1);
console.log('numbers ', numbers);
console.log('-------slice-----------');
// slice method
const nums = [10, 20, 30, 40, 50]
const deletedNums = nums.slice(1, 3)
console.log('deletedNums', deletedNums)   // 20, 30
console.log('nums', nums)   // 10,20,30,40,50

// shallow copy of array
const numsCopy = nums.slice(0)
console.log('numsCopy', numsCopy);    // 10,20,30,40,50
console.log('nums', nums);            // 10,20,30,40,50
nums[0] = 1000
console.log(nums[0]);       // 1000
console.log(numsCopy[0]);   // 10

const n = [10, 20]
// copy (address is copied) 
// changing n will also change n1
const n1 = n
n[0] = 90
console.log(n[0]);   // 90 
console.log(n1[0]);  // 90

console.log('----------------------');
const movies = ['Spiderman', 'Batman', 'Antman', 'Iron man']
// shallow copy using spread operator for array
const moviesCopy = [...movies]
movies[0] = 'Shaktiman'
console.log(movies[0]);     // Shaktiman
console.log(moviesCopy[0]); // Spiderman

console.log('---------map method------------');

const numsArr = [100, 200, 300, 400, 500]
// const numsArrCopy = []
// for (let i=0;i<numsArr.length;i++) {
//     numsArrCopy.push(numsArr[i]+10)
// }
// console.log(numsArrCopy);

const newNumsArr = numsArr.map((value, index, arr) => {
    return value + 10
})
console.log(numsArr);      // 100,200,300,400,500
console.log(newNumsArr);   // 110,210,310,410,510

console.log('------filter method--------');

const ageArr = [45, 56, 9, 89, 10, 5]

const filteredAges = ageArr.filter((value) => {
    if (value >= 18) {
        return true
    } else {
        return false
    }
})
console.log(ageArr);
console.log(filteredAges);
const filteredAge = ageArr.filter(value => value >= 18)
console.log(filteredAge);

console.log('-----------------------------------------');

const books = [
    {
        title: 'Harry Potter',
        price: 90,
        author: 'J K Rowling'
    },
    {
        title: 'Indian Constitution',
        price: 720,
        author: 'Lakshmi Kanth'
    },
    {
        title: 'Wings of fire',
        price: 150,
        author: 'APJ Abdul Kalam'
    }
]
const booksWithGst = books.map(book => {
    book.price = book.price * 0.18 + book.price
    return book
})
console.log(booksWithGst);
// new price  [106.2, 849, 177]
console.log(books);

console.log('-----deep copy using spread opeartor---');
const booksWithGstDeepCopy = books.map(book => {
    const b = { ...book }
    b.price = b.price * 0.18 + b.price
    return b
})
console.log(booksWithGstDeepCopy);
console.log(books);
console.log('--------------------------------');

const products = [
    {
        productName: 'Lipstick',
        price: 999,
        brand: 'Maybeline'
    }, {
        productName: 'eyeLiner',
        price: 500,
        brand: 'Lakme'
    }, {
        productName: 'trimmer',
        price: 1000,
        brand: 'Philips'
    }, {
        productName: 'beardo oil',
        price: 260,
        brand: 'Beardo'
    }
]
const productsWithGst = products.map(product => {
    const productCopy = { ...product }
    productCopy.price = productCopy.price * 0.03 + productCopy.price
    return productCopy
})

console.log(products);
console.log(productsWithGst);

console.log('filter the products where price > 500');
const filteredProducts = products.filter((product) => {
    // if(product.price > 500) {
    //     return true
    // } else {
    //     return false
    // }
    return product.price > 500
})
console.log(filteredProducts);

// reference copy
// const booksCopy = books
// console.log(books===booksCopy);  true

// const booksCopy = [...books]
// console.log(books===booksCopy);  false
// console.log(books[0]===booksCopy[0]); true

// books[0].price = 100
// console.log(books[0].price);          // 100
// console.log(booksCopy[0].price);      // 100

// const booksCopy = books.map(book=>{
//     return {...book}
// })
// console.log(booksCopy);
// console.log(books[0]===booksCopy[0]);   // false

// books[0].price = 100
// console.log(books[0].price);          // 100
// console.log(booksCopy[0].price);      // 90
console.log('----------join method-----------');
const myArr = [100, 200, 300, 400, 500]
const str = myArr.join('-')
console.log('str', str);

const fruits = ['Apple','Pineapple','Custard Apple','Green Apple']
// Apple,PineApple,Custard Apple,Green Apple
const fruitStr = fruits.join(',')
console.log('fruitStr', fruitStr);

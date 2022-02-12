const hobbies = ['sleeping', 'Coding', 'Treking', 'Cooking']
console.log('---------------push------------');
const hobbiesLength = hobbies.push('Reading')

console.log('Hobbies after push', hobbies);
console.log('hobbiesLength', hobbiesLength);

console.log('hobbies', hobbies.push('playing'));

console.log(hobbies);
console.log('---------------pop-------------');
const deletedElement = hobbies.pop()
console.log('hobbies after pop:', hobbies);
console.log('deletedElement:', deletedElement);

console.log('---------------foreach-------------');
//used to loop through array
//it is a function
hobbies.forEach(function(value, index, arr) {
    console.log(`${index}-${value}`);
})

console.log('---------------unshift-------------');
//adds the element at the start of the array
const lenOfHobbies = hobbies.unshift('Gaming')
console.log('hobbies after unshift:', hobbies);
console.log('hobbies length after unshift', lenOfHobbies);

console.log('---------------shift-------------');
//removes the element at the start of the array
const deletedHobby = hobbies.shift()
console.log('hobbies length after shift', hobbies);
console.log('deleted hobby after shift', deletedHobby);

console.log('------------Array.isArray---------------------');
console.log('typeof(hobbies):', typeof(hobbies));

//isArray returns true is its array else return false
const isHobbiesArray = Array.isArray(hobbies)
console.log('isHobbiesArray:', isHobbiesArray);

console.log('---------------includes--------------------------');
console.log(hobbies);
//checks whether element is present or not
//if present returns true else return false
const isCodingPresent = hobbies.includes('Coding')
console.log('isCodingPresent: ', isCodingPresent);

console.log('------------------indexof-----------------------');

//checks whether element is present or not
//if presents returns the index of element else return -1
const indexOfReading = hobbies.indexOf('Reading')
console.log('Index of Reading : ', indexOfReading);

console.log('------------------splice-----------------------');
//splice method
//can add/delete elements in between in a array
//splice(start index,delete count,element)
//will modify original array
const numbers = [10, 20, 30, 40, 50]
const deletedElements = numbers.splice(2, 2, 60, 70, 80)
console.log('deletedElements', deletedElements); //30,40
console.log('numbers', numbers); //10,20,60,70,80,50
console.log('-------------------------------');
//if we want to only add elements without deleting pass delete count as 0(second parameter)
const deletedElements1 = numbers.splice(1, 0, 100, 110)
console.log('deletedElement1', deletedElements1);
console.log('numbers', numbers);

console.log('------------------slice-----------------------');
//will not modify original array it creates new array
//syntax:       
//slice(start index,no.of elements)
//if u not specify 2nd parameter it will take whole elements from the index number provided in 1st parameter
const nums = [10, 20, 30, 40, 50]
const deletedNums = nums.slice(1, 3)
console.log('deletedNums', deletedNums); //20,30,40
console.log('nums', nums); //10,20,30,40,50

//shallowcopy of array
const numsCopy = nums.slice(0)
console.log('numsCopy', numsCopy); //10,20,30,40,50
console.log('nums', nums); //10,20,30,40,50
nums[0] = 1000
console.log(nums[0]); //1000
console.log(numsCopy[0]); //10

//copy(address is copied) changing n will also change n1
const n = [10, 20]
const n1 = n
n[0] = 90
0
console.log(n[0]); //90
console.log(n1[0]); //90


console.log('----------------------------');
//spread operator (ES6 feature)
//{...var_name}
//[...var_name]
const movies = ['SpiderMan', 'Batman', 'AntMan', 'IronMan']
    //shallow copy using spread operator for array
const moviesCopy = [...movies]
movies[0] = 'Shaktiman'
console.log(movies[0]); //Shaktiman
console.log(moviesCopy[0]); //Shaktiman

console.log('------------map method----------------');
//map
//Syntax: arr.map(callbackfunction(value,index,arr){ return value })
// will not change original array
//when you want to perform some logic on all values we can use map method
const numsArry = [100, 200, 300, 400, 500]
    /*
    const numArryCopy=[]
    for(let i=0;i<numsArray;i++){
        numsArryCopy.push(numsArr[i]+10)
    }
    console.log(numsArryCopy);
    */
const newNumArry = numsArry.map((value, index, arr) => {
    return value + 10
})
console.log(numsArry); //[100, 200, 300, 400, 500]
console.log(newNumArry); //[110, 210, 310, 410, 510]

console.log('------------filter----------------');
/*
syntax:
    arr.filter(callbackfunc(value,index,arr)=>{return booleanvalue(true/false)})
*/
//will filter and gives only values which satisfies the condition into a new arry
const ageArry = [45, 56, 9, 89, 10, 5]
const filteredAges = ageArry.filter((value) => {
    if (value >= 18) {
        return true
    } else {
        return false
    }
})

// or in another way we can write it by using arrow function

const filteredAge = ageArry.filter(value => value >= 18)

console.log(ageArry); // [45, 56, 9, 89, 10, 5]

console.log(filteredAges); // [45, 56, 89]

console.log(filteredAge); // [45, 56, 89]

console.log('------------sort and reverse----------------');

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

console.log('-------------shallow copy ----map-------------------');

const books = [{
        title: 'Harry Potter',
        price: 90,
        Author: 'J K Rowling'
    },
    {
        title: 'Indian Constitution',
        price: 9720,
        Author: 'Lakshmi kanth'
    },
    {
        title: 'Wings of fire',
        price: 150,
        Author: 'APJ Abdual Kalam'
    }
]

const bookWithGST = books.map(book => {
    book.price = book.price * 0.18 + book.price
    return book
})
console.log(books === bookWithGST); //false
console.log(books[0] === bookWithGST[0]); //true

console.log(bookWithGST); // prints all the objects in the array with upadted price value
console.log(books); //in this also all prices will be changed

console.log('-----Deepcopy-----map------------');
const bookWithGST_DeepCopy = books.map(book => {
    const B = {...book }
    B.Price = B.Price * 0.18 + B.Price
    return B
})

console.log(books === bookWithGST_DeepCopy); //false
console.log(books[0] === bookWithGST_DeepCopy[0]); //false
console.log(bookWithGST_DeepCopy);
console.log(books);

console.log('--------------------------------');
const product = [{
        productName: 'LipStick',
        price: 999,
        brand: 'Maybeline'
    },
    {
        productName: 'EyeLiner',
        price: 500,
        brand: 'Lakme'
    },
    {
        productName: 'Trimmer',
        price: 1000,
        brand: 'Philips'
    },
    {
        productName: 'Beardo Oil',
        price: 260,
        brand: 'Beardo'
    }
]
const productsWithGst = product.map(product => {
    const productCopy = {...product }
    productCopy.price = productCopy.price * 0.03 + productCopy.price
    return productCopy
})

console.log(productsWithGst); //created new array with price value updated with 3% GST 
console.log(product); //no change(it is a original array)

const p = product.filter((product) => product.price > 500)
console.log(p); // returns objcts with price >500

console.log('--------------join()------------------');
//covert an array into string
/*
join()
arry_name.join(seperator)

*/
const myArr = [100, 200, 300, 400, 500]
const str = myArr.join('-')
console.log('str:', str); //str: 100-200-300-400-500


const fruits = ['Apple', 'Mango', 'Grapes', 'PineApple']
const fruitsstr = fruits.join() //if you not pass any seperator you will get ',' by default between every element
console.log('fruitsstr: ', fruitsstr); //fruitsstr Apple,Mango,Grapes,PineApple













//Function or method

/*
1.Parameters
2.What it returns
3.Functionality of the function or method
*/

//push
/*
1.any primitive or reference type
2.length of the array
3.adds the element after the last index
*/
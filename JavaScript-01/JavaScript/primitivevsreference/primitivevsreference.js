let a = 20;
console.log(a);  // 20
a = 30
console.log(a);  // 30

let b = 100
console.log(b);  // 100
a = b
console.log(a);  // 100
console.log(b);  // 100
b = 200
console.log(b);  // 200
console.log(a);  // 100
console.log('---------------------------');

const person = {
    firstName: 'Ajay',
    lastName: 'K'
}
console.log(person.firstName);   // Ajay
const personCopy = person
console.log(personCopy.firstName); // Ajay

personCopy.firstName = 'Sujeet'
console.log(personCopy.firstName);  // Sujeet
console.log(person.firstName);      // Sujeet

const personCopyNew = personCopy
personCopyNew.firstName = 'Guru'
console.log(person.firstName);        // Guru
console.log(personCopy.firstName);    // Guru
console.log(personCopyNew.firstName); // Guru

const val = 20
const val1 = 20
// compares the value
console.log(val === val1);            // true
// compares the address of the object
console.log(person === personCopy); // true 

const car = {
    carBrand: 'Jaguar',
    moreDetails: {
        price: 10000000
    }
}

const car1 = {
    carBrand: 'Jaguar',
}

car1.moreDetails = car.moreDetails

// Never ever compare the objects using strict equal to
// because it compares the address, does not compares the
// data.
console.log(car === car1);          // false
console.log('-----------------------------------');
console.log(car.moreDetails === car1.moreDetails);// true

const mobile = {
    price: 9000,
    brand: 'MI'
}

// taking copy of mobile (address will be copied)
const mobileCopy = mobile

// spread operator  (...) ES6 feature
// shallow copy(first level of properties will be copied)
const mobileCopyNew = { ...mobile }
mobileCopyNew.price = 40000
console.log(mobileCopyNew.price);     // 40000
console.log(mobile.price);            // 9000
console.log(mobileCopy.price);        // 9000

console.log('-----------------------------------');
mobile.brand = 'Samsung'
console.log(mobile.brand);          // Samsung
console.log(mobileCopy.brand);      // Samsung
console.log(mobileCopyNew.brand);   // MI

console.log('---------------------------------------');

const movie = {
    movieName : 'Spiderman no way home',
    director  :  'John watts',
    actor : 'Tom Holland',
    moreDetails : {
        budget : '200 million USD',
        heroine : 'Zendya',
        villain : 'Goblin',
    }
}
// deep copy 
// taking multiple level copy using spread operator
const movieCopy = {
    ...movie,
    moreDetails : {...movie.moreDetails}
}
movie.director = 'Upendra'
console.log(movie.director);       // Upendra
console.log(movieCopy.director);   // John watts
console.log('------------------------------');
movie.moreDetails.heroine = 'Ramya'
console.log(movie.moreDetails.heroine);     // Ramya
console.log(movieCopy.moreDetails.heroine); // Zendya  
console.log('---------------------------------------');
const bike = {
    price : 70000,
    brand:'bajaj',
    bikeName : 'pulsar',
    engineDetails : {
        cc : '200cc',
        stroke : '4 stroke'
    }
}
// deep copy of an object/ array
// all the levels of object/array will be copied 
// i.e., new object/array will be created
const bikeDeepCopy = JSON.parse(JSON.stringify(bike))
bike.engineDetails.cc = '250cc'
console.log(bike.engineDetails.cc);         // 250cc
console.log(bikeDeepCopy.engineDetails.cc); // 200cc
console.log('-----------------------------');
const myObj = {
    firstName : 'Chandan'
}
const myObj1 = {
    lastName : 'K'
}
// merge two objects using spread operator
const myObj2 = {
    ...myObj,
    ...myObj1
}
console.log(myObj2);





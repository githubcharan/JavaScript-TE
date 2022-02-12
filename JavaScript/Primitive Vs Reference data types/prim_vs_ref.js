let a = 20;
console.log(a); //20
a = 30
console.log(a); //30

let b = 100
console.log(b); //100
a = b
console.log(b); //100
console.log(a); //100
b = 200
console.log(b); //200
console.log(a); //100

console.log('------------------------------');

const person = {
    firstname: 'Ajay',
    lastname: 'k'
}
console.log(person.firstname); //Ajay
const personCopy = person
console.log(personCopy.firstname); //Ajay

personCopy.firstname = 'Sujeet'
console.log(personCopy.firstname); //Sujeet
console.log(person.firstname); //Sujeet

const personCopyNew = personCopy
personCopyNew.firstname = 'Guru'
console.log(person.firstname); //Guru
console.log(personCopy.firstname); //Guru
console.log(personCopyNew.firstname); //Guru

const val = 20
const val1 = 20
    //compare the value
console.log(val === val1); //true
//compare the address of the object
console.log(person === personCopy); //true

const car = {
    CarBrand: 'Audi',
    moreDetails: {
        price: 5000000
    }
}

const car1 = {
    CarBrand: 'Audi'
}

car1.moreDetails = car.moreDetails

/*
never ever compare the objects using strict equal to because
it compares the address,does not compare data 
*/
console.log(car === car1); //false
console.log('-----------------------------------');
console.log(car.moreDetails === car1.moreDetails); //true

const MOBILE = {
    price: 9000,
    brand: 'MI'
}

//taking copy of MOBILE(address will be copied)
const MOBILECOPY = MOBILE

//spread operator (...) ES6
//shallow copy(first level of properties will be copied)
const MOBILECOPYNEW = {...MOBILE }
MOBILECOPYNEW.price = 40000
console.log(MOBILECOPYNEW.price); //40000
console.log(MOBILE.price); //9000
console.log(MOBILECOPY.price); //9000
console.log('---------------------------------');
MOBILE.brand = 'Samsung'
console.log(MOBILE.brand); //Samsung
console.log(MOBILECOPY.brand); //Samsung
console.log(MOBILECOPYNEW.brand); //MI

console.log('---------------------------------');

const movie = {
        movieName: 'SpiderMan No Way Home',
        director: 'John Watts',
        actor: 'Tom Holland',
        moreDetails: {
            budget: '200 million USD',
            herion: 'Zandey',
            villain: 'Goblin'
        }
    }
    //deepcopy
    //taking multiple level copy using spread operator
const movieCopy = {
    ...movie,
    moreDetails: {...movie.moreDetails }
}

movie.director = 'Upendra'
console.log(movie.director); //Upendra
console.log(movieCopy.director); //John Watts

console.log('---------------------------------');
movie.moreDetails.herion = 'Ramya'
console.log(movie.moreDetails.herion);
console.log(movieCopy.moreDetails.herion);
console.log('---------------------------------');
const bike = {
        price: 70000,
        brand: 'Bajaj',
        bikeName: 'Pulsar',
        engineDetails: {
            cc: '200cc',
            stroke: '4 stroke'
        }
    }
    //deep copy of an object/array
    //all the levels of object/array will be copied
    //i.e,new object/array will be created
const bikeDeepCopy = JSON.parse(JSON.stringify(bike))
bike.engineDetails.cc = '250cc'
console.log(bike.engineDetails.cc); //250cc
console.log(bikeDeepCopy.engineDetails.cc); //200cc

console.log('---------------------------------');
const myObj = {
    firstname: 'Charan'
}
const myObj1 = {
        lastname: 'Teja'
    }
    //merge two objects using spread operator
const myObj2 = {
    ...myObj,
    ...myObj1
}
console.log(myObj2);
console.log('App file');

//object creation in javascript
var person = {
    firstName: 'Allu',
    lastName: 'Arjun',
    age: 39,
    gender: 'Male',
    isMarried: true,
    getFullName: function() {
        return this.firstName + '' + this.lastName
    }

}
console.log('Person', person);

//getting the values  from object using . operator
var fname = person.firstName
console.log(fname);

var lname = person.lastName
console.log(lname);

var pAge = person.age
console.log(pAge);

var pGender = person.gender
console.log(pGender);

var pMarried = person.isMarried
console.log(pMarried);

var fullname = person.getFullName()
console.log('Full Name -', fullname);

console.log('--------------------------');

var marker = {
        color: 'black',
        height: '10cm',
        'pri ce': 25
    }
    //Another way of accesing the properties of objects
console.log(marker['pri ce']);
console.log(marker['color'])
console.log(person['getFullName']());

console.log('--------------------------')

var car = new Object()
car.price = 4000000
car.model = 2021
car.brand = 'Toyota'
car.cname = 'Fortuner'
car.color = 'blue'
console.log(car);
console.log(car.price);
console.log(car.model);
console.log(car.brand);
console.log(car.cname);
console.log(car.color);

console.log('--------------------------')
    //shallow copy
let Bike = [{
        name: 'Destiny',
        Brand: 'hero',
        engine: {
            cc: '125cc',
            stage: 'bs4'
        }
    }]
    // console.log(Bike);
    // let Bike_SCopy = Object.assign({}, Bike);
    // Bike_SCopy.engine.stage = 'BS6';
    // console.log(Bike);
    // console.log(Bike_SCopy);


const B1 = Bike;
console.log(B1);

B1.name = 'hero'
console.log(B1.name);
console.log(Bike.name);
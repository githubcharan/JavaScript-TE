const person = {
        firstName: 'Ajith',
        lastName: 'k',
        age: 10,
        hobbies: ['Cricket', 'Singing'],
        address: {
            state: 'karanataka',
            pincode: 560068,
            city: 'Bangalore'
        }
    }
    /*
    const firstName = person.firstName
    const lastName = person.lastName
    const age = person.age
    */
    //object Destructuring(ES6 feature)
const { firstName, lastName } = person
console.log('firstName', firstName);
console.log('lastName', lastName);
//multi level destruction
const { hobbies, address: { state, city } } = person
console.log('state', state);
console.log('city', city);
console.log('hobbies', hobbies);

//alias names
const { firstName: fname, lastName: lname } = person
console.log('firstname', fname);
console.log('Lastname', lname);

function calculateTotalPrice({ gst, price }) {
    console.log('gst', gst);
    console.log('price', price);
    return price + (price * (gst / 100))
}
const product = {
    price: 100,
    gst: 3,
    productNmae: 'bag',
    mfgYear: 2021,
    moreDetails: {
        brand: 'WildCraft',
        color: 'blue'
    }
}
calculateTotalPrice(product)

console.log('-----Array destructing-----------');
const fruits = ['Apple', 'PineApple', 'Orange', 'Banana']

// const fruit1=fruits[0]
// const fruit2=fruits[1]

//Array destructing
const [fruit1, fruit2] = fruits
console.log(fruit1);
console.log(fruit2);
console.log('----------');
//if you want skipp any leave a empty space
const [fruit01, , fruit03] = fruits
console.log(fruit01);
console.log(fruit03);
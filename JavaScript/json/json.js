const jsObject = {
    firstName: "Charan",
    lastName: "Teja",
    age: 25,
    isAdult: false,
    hobbies: ["cricket", "Singing"],
    address: {
        pincode: 560068,
        state: "karanataka",
        city: "Bangalore"
    }
}
console.log('--------------Javascript to JSON------------');

const stringifiedJSON = JSON.stringify(jsObject)

console.log(stringifiedJSON);
console.log(typeof(stringifiedJSON));

console.log('-----------------JSON to Javascript--------------');

const javascriptObj = JSON.parse(stringifiedJSON)

console.log(javascriptObj);
// global level this is equal to window object
// this will always point to the current object
console.log(this);
console.log(window);
console.log(this === window);
console.log('-------------------------');
const person = {
    firstName: 'Ajit',
    lastName: 'K',
    getFullName: function () {
        // this is person object
        console.log('this inside getFullName - ', this);
        return this.firstName + ' ' + this.lastName
    }
}

person.getFullName()

function greet() {
    // this is equal to window object 
    // all the global properties and functions
    // belong to window object
    //  (greet will be invoked using window reference) 
    console.log('this inside greet - ', this);
    console.log('greet func');
}
window.greet()
greet()
console.log('--------------------------');
const myObj = {
    getData: function () {
        function test() {
            // this is equal to window object
            // because test() is not invoked by 
            // any object reference
            console.log('this inside test func', this);
            console.log('test func');
        }
        test()
        return 100
    }
}
myObj.getData()

console.log('------------------------------------');
const myObj1 = {
    firstName:'Vijay',
    lastName:'S',
    getResult : () =>{
        // this inside getResult - window 
        //  refers to its parent context
        console.log('getResult', this);
    },
    getName: function() {
        const test = ()=>{
            // Arrow functions will not have its own 
            // this. this will refer to its parent
            // execution context
            console.log('this inside test ', this);
            console.log('test func');
        }
        test()
        return `${this.firstName} ${this.lastName}`
    }
}
myObj1.getName()
myObj1.getResult()
console.log('------------------------');
/* 
1. this in global - window
2. this in named function which is declared in 
    global level - window
3. this in named function which is invoked using
object reference - current object
4. this in arrow function which is invoked using
object reference - parent context object
5. A named function declared inside a function 
which is invoked using object reference - window object
6. An arrow function declared inside a function 
which is invoked using object reference - parent 
context object
 */


const obj = {
    firstName:'Chandan'
}
const re = Object.freeze(obj)
console.log(re);
obj.lastName ='K'
console.log('obj',obj);
re.lastName = 'I'
console.log(re);
console.log(obj.firstName);
// obj.firstName ='hjhj'
// console.log(obj);

const m ={
    firstName: 'Chandan',
    lastName:'K'
}
const r = Object.create(m)

console.log(r);
console.log('gg',r.firstName);
console.log('hj', r.lastName);
r.firstName = 'Google'
r.lastName = 'H'
console.log(m);
console.log(r);
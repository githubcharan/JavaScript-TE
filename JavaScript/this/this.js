console.log('-----------------this-----------------------------');

//'this'  is a keyword which will be always pointing to the current object
//by default all properties belong to window object unless it is belong to some other object
console.log(this);
console.log(window);
console.log(this === window); //true
console.log('-------------------------------------');
const person = {
    firstName: 'Charan',
    lastName: 'Teja',
    getFullName: function() {
        //this is person Object
        console.log('this inside getFullName', this);
        return this.firstName + ' ' + this.lastName
    }
}
person.getFullName()

function greet() {
    //this is equal to window object
    //all the global properties and functions belong to window object
    //(greet will be invoked using window reference)
    console.log('this inside greet', this);
    console.log('greet func');
}
window.greet()
console.log('------------------------------------------');
const myObj = {
    getData: function() {
        function test() {
            //this is equal to windows object
            //because test() is not invoked by any object reference
            console.log('this inside test func', this);
            console.log('test func');
        }
        test()
        return 100
    }
}
myObj.getData()

console.log('------------------------------------------');

//in arrow functions this refers parent execution context
const myObj1 = {
    firstName: 'Vijay',
    lastName: 'S',
    getresult: () => {
        //this inside getResult - window
        //refers to its parent context
        console.log('getResult', this);
    },
    getName: () => {
        const test = () => {
            //Arrow function will not have its own 'this'
            //'this' will refer to its parent execution context
            console.log('this inside test', this);
            console.log('test func');
        }
        test()
        return `${this.firstName} ${this.lastName}`
    }
}
myObj1.getName()
myObj1.getresult()

console.log('------------------------');
/*
1.this in global - window
2.this in named function which is declared in
 global level - window
3.this in named function which is invoked using
 reference - current object
4.this is arrow function which is invoked 
using using object reference - parent context object
5.a named function declared inside a function which 
is invoked using object reference - window object
6.An arrow function declared inside a function which
 is invoked using object reference - parent context object
*/
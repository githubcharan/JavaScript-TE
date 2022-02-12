console.log('a - ', a); //undefined 
var a = 10 //global variable
var b = 30
console.log('b outside function - ', b);

function test() {
    //Variable Hoisting inside function
    //local variables will be given first preference
    //if the variable is not declared locally Js engine will search the variable in global scope
    //if the variable is declared locally Js engine will not search the variable in global scope
    console.log('b inside function - ', b);
    var b = 20 //local variable
    console.log('a inside function - ', a);
}

test()

console.log('-----------------------------------------');
//Function Hoisting

add(10, 20)

function add(a, b) { console.log(a + b); }

console.log('-----------------------------------------');
/*
    //greet() 
Calling the Anonymous function before assigning the function  will result in error  
i.e., greet is not a function because the greet variable will be hoisted to the top as a variable
*/
var greet = function() { console.log('welcome'); }
greet()
    /*
    //var greet
    //greet()         // greet is not a function
    //greet=function(){console,log('welcome);}
    */
console.log('-----------------------------');
/*
product()
calling the arrow function before assigning the function to variable
will result in error i,e., greet is not a function because the product 
variable will be hoisted to the top as a product
*/
var product = (a, b) => { console.log(a * b); }
product(10, 2)
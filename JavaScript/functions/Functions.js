console.log('-----Function------');
//code resusablity
//block of codes

console.log('*--Named Function---*');
//function function_name(arg1,arg2,.....,arg n){
//logic
//}
function add(num1, num2) {
    var sum = num1 + num2
    console.log('Sum: ', sum);
}
add(25, 25);
add(25, 254);

console.log('--------finding voting eligibility using  name_functions----------');

function find_Is_Eligible_For_Voting(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

function Print_Eligible_or_Not(result) {
    if (result == true) {
        console.log('Eligible for Voting');
    } else {
        console.log('Not Eligible for Voting');
    }
}
var result = find_Is_Eligible_For_Voting(15)
Print_Eligible_or_Not(result)


var result = find_Is_Eligible_For_Voting(25)
Print_Eligible_or_Not(result)


console.log('*--Anonymous Function---*');
//functions without names is anonymous functions
/*syntax:-
function (arg1,arg2,.....,arg n){
logic
}
*/
//to execute functions we use parantisis () with or without parameters or arguments
//to use anonymous function we store them into one variable and call & execute them
var findproduct = function(a, b) {
    return a * b
}
console.log(findproduct);
var productVal = findproduct(12, 3)
console.log('Product: ', productVal);

var person = {
    testFunc: function() {
        console.log('test Function Executed');
    },
    testFunc1: function() {
        return 'test Function 1 Executed'
    }
}
person.testFunc(); //; is mandatory
console.log(person.testFunc1());

console.log('*--Self Invoked Function---*');
// by default automatically functions will be executed without calling
//executed only once
//they too dont have any names
/*
syntax:-
(function (arg1,arg2,.....,arg n){
logic
})(arg1 value,arg2 value,.....,arg)
*/
(function(a, b) {
    var diff = b - a
    console.log('Difference: ', diff);
})(10, 20);

console.log('*--Arrow Function(ES6 feature)---*');
/*
Syntax:-
=> fat arrow
Scenario 1 - No parameters and code is more than one line
() => {
    //code
    //code
}
Scenario 2 - Single parameter and code is more than one line
arg1=>{
    //code
    //code
    return data
}
Scenario 3 - Mutiple parameters and code is single line
(arg1,arg2)=>code
Scenario 4 - Single parameter and code is single line
arg1=>arg1*arg1

1.If there is single parameter paranthesis () is  not required
2.If there are no parameters or multiple parameters () is mandatory
3. If there are multiple lines of code {} are mandatory and return statement should be added by developer if required.
4.

*/
var greet = () => {
    console.log('Greet function');
    console.log('Welcome');
}
greet()

var Square_of_Number = num => num * num
var result = Square_of_Number(2)
console.log('Result', result);
console.log(Square_of_Number(3));

var CalculateTotalPrice = (price, GSTper) => {
    var TotalPrice = (price * GSTper / 100) + price
    return TotalPrice
}
var PriceVal = CalculateTotalPrice(300, 18)
console.log(PriceVal);
//console.log('start')
//(10===10?console.log('equal'):console.log('not equal'))

//semicolon is mandatory before () if you are writing () next line after executing any function
console.log('start');
(10 === 10 ? console.log('equal') : console.log('not equal'))

// console.log('end')
console.log('-----------------------');

function test() {
    function inner() {
        console.log('Inner function');
    }
    return inner
}
/*
const val = test()
console.log(val);
val() //Inner function
*/

//console.log(test());

//Function currying
test()(); //Innerfunction

(function() {
    console.log('hello');
})()
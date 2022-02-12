// Named functions 
function add(num1, num2) {
    var sum = num1 + num2
    console.log('Sum - ', sum);
}
add(10, 20)
add(30, 40)

function findIsEligibleForVoting(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}
function printEligibleOrNot(result) {
    if (result === true) {
        console.log('Eligible for Voting');
    } else {
        console.log('Not Eligible');
    }
}

var result = findIsEligibleForVoting(12)
printEligibleOrNot(result)

var result1 = findIsEligibleForVoting(34)
printEligibleOrNot(result1)
printEligibleOrNot(false)


// Anonymous Function
var findProduct = function (a, b) {
    return a * b
}
console.log(findProduct);
var productVal = findProduct(12, 3)
console.log('Product - ', productVal);

var person = {
    testFunc : function() {
        console.log('test func executed');
    }
}
person.testFunc();

// Self Invoked Functions (IIFE)

(function(a,b){
    var diff = b-a
    console.log('Difference - ', diff);
})(10,20);

// Arrow Functions (ES6 feature)
console.log('--------Arrow Functions--------');
var greet = () => {
    console.log('Greet function');
    console.log('Welcome');
}
greet()

var squareOfNumber = num=>num*num
var result = squareOfNumber(2)
console.log('Result', result);
console.log(squareOfNumber(3));

var calculateTotalPrice = (price,gstPer) => { 
    var totalPrice = (price*gstPer/100) + price
    return totalPrice
}
var priceVal = calculateTotalPrice(300, 18)
console.log(priceVal);










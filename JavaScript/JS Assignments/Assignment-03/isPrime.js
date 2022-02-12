console.log('*-*-*-Prime or Not Checking-*-*-*');

/*
Give your input here
        |
       \ /
        .
*/
const a = 2
console.log('*--Named Function---*');

function isPrime(a) {
    let Result
    if (a <= 1) { Result = false } else {
        for (let i = 2; i <= a / 2; i++) {
            if (a % i === 0) {
                Result = false
            }
        }
        Result = true
    }
    if (Result == true) {
        console.log(a + ' is a PrimeNumber');
    } else {
        console.log(a + ' is not a PrimeNumber');
    }
}

isPrime(a);
//---------------------------------------------------------
console.log('*--Anonymous Function---*');
const PrimeCheck = function(a) {
    let Result
    if (a <= 1) { Result = false } else {
        for (let i = 2; i <= a / 2; i++) {
            if (a % i === 0) {
                Result = false
            }
        }
        Result = true
    }
    if (Result == true) {
        console.log(a + ' is a PrimeNumber');
    } else {
        console.log(a + ' is not a PrimeNumber');
    }
}
PrimeCheck(a)

//--------------------------------------------------------
console.log('*--Self Invoked Function---*');

(function(a) {
    let Result
    if (a <= 1) { Result = false } else {
        for (let i = 2; i <= a / 2; i++) {
            if (a % i === 0) {
                Result = false
            }
        }
        Result = true
    }
    if (Result == true) {
        console.log(a + ' is a PrimeNumber');
    } else {
        console.log(a + ' is not a PrimeNumber');
    }
})(a)
//---------------------------------------------------
console.log('*--Arrow Function(ES6 feature)---*');

const IsPrime = a => {
    let Result
    if (a <= 1) { Result = false } else {
        for (let i = 2; i <= a / 2; i++) {
            if (a % i === 0) {
                Result = false
            }
        }
        Result = true
    }
    if (Result == true) {
        console.log(a + ' is a PrimeNumber');
    } else {
        console.log(a + ' is not a PrimeNumber');
    }
}
IsPrime(a)
    /* //getting prime numbers using unshift
    let arr = [1, 2, 3]

    function primeis(a) {
        if (a <= 1) { return false }
        for (let i = 2; i <= a / 2; i++) {
            if (a % i === 0) {
                return false
            }
        }
        return true
    }
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        if (primeis(arr[i])) {
            newarr.unshift(arr[i])
        }
    }
    console.log(newarr);
    */

//using filter getting prime numbers
function primeis(number) {
    if (number <= 1) { return false }
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}
let arr = [1, 2, 3, 4, 5, 6, 15, 17, 21, 19, 7, 8, 41, 9, 10, 11, 12, 13, 27]
const arr1 = arr.filter((value) => {
    return primeis(value)
})
console.log(arr1);
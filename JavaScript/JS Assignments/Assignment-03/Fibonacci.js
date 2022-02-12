console.log('*--Fibonacci series---*');
const range = 5
console.log('*--Named Function---*');

function Fib() {
    let a = 0
    let b = 1
    let c
    let str = ''
    for (let i = 1; i <= range; i++) {
        str += String(a) + ' '
        c = a + b
        a = b
        b = c
    }
    console.log(str);
}
Fib()
console.log('*--Anonymous Function---*');

const fib = function() {
    let A = 0
    let B = 1
    let C
    let str = ''
    for (let i = 1; i <= range; i++) {
        str += String(A) + ' '
        C = A + B
        A = B
        B = C
    }
    console.log(str);
}
fib()
console.log('*--Self Invoked Function---*');
(function(r) {
    let A = 0
    let B = 1
    let C
    let str = ''
    for (let i = 1; i <= r; i++) {
        str += String(A) + ' '
        C = A + B
        A = B
        B = C
    }
    console.log(str);
})(range)
console.log('*--Arrow Function(ES6 feature)---*');
const fibonacci = () => {
    let A = 0
    let B = 1
    let C
    let str = ''
    for (let i = 1; i <= range; i++) {
        str += String(A) + ' '
        C = A + B
        A = B
        B = C
    }
    console.log(str);
}
fibonacci()
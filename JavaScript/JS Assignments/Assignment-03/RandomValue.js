console.log('*--Random number between 1 and 50---*');

const Range1 = 1
const Range2 = 50

console.log('*--Named Function---*');

function Result() {
    let RandomNum = Math.ceil(Math.random() * Range2)

    if (RandomNum < Range1) {
        RandomNum = RandomNum + (Range1 - RandomNum)
    }
    console.log('Random number between ', Range1, ' and ', Range2, ' : ', RandomNum);
}
Result()

console.log('*--Anonymous Function---*');

let RandomNum = Math.ceil(Math.random() * Range2)
const Randnumb = function() {
    if (RandomNum < Range1) {
        RandomNum = RandomNum + (Range1 - RandomNum)
    }
    console.log('Random number between ', Range1, ' and ', Range2, ' : ', RandomNum);
}
Randnumb()

console.log('*--Self Invoked Function---*');

(function(r1, r2) {
    let RandomNum = Math.ceil(Math.random() * Range2)
    if (RandomNum < Range1) {
        RandomNum = RandomNum + (Range1 - RandomNum)
    }
    console.log('Random number between ', Range1, ' and ', Range2, ' : ', RandomNum);
})(Range1, Range2)

console.log('*--Arrow Function(ES6 feature)---*');

const randnumb = () => {
    let RandomNum = Math.ceil(Math.random() * Range2)
    if (RandomNum < Range1) {
        RandomNum = RandomNum + (Range1 - RandomNum)
    }
    console.log('Random number between ', Range1, ' and ', Range2, ' : ', RandomNum);
}
randnumb()
console.log('*--FACTORIAL---*');

const num = 4
console.log('*--Named Function---*');

function Fact() {
    let fact = 1
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    console.log(fact);
}
Fact()
console.log('*--Anonymous Function---*');
const FACT = function() {
    let f = 1
    for (let i = 1; i <= num; i++) {
        f = f * i;
    }
    console.log(f)
}
FACT()
console.log('*--Self Invoked Function---*');
(
    function(num) {
        let facto = 1
        for (let i = 1; i <= num; i++) {
            facto = facto * i;
        }
        console.log(facto);
    }
)(num)

console.log('*--Arrow Function(ES6 feature)---*');

const FACTORIAL = () => {
    let FACT = 1
    for (let i = 1; i <= num; i++) {
        FACT = FACT * i;
    }
    console.log(FACT)
}
FACTORIAL()
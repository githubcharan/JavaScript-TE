console.log('*-*-*-Reverse a String-*-*-*');
/*
Give your input here
        |
       \ /
        .
*/
const str = 'abcd'
    //--------------------------------------------------
console.log('*--Named Function---*');

function StringReverse() {
    let rev_str = ''
    for (let i = str.length - 1; i >= 0; i--) {
        rev_str += str.charAt(i)
    }
    console.log(rev_str);
}
StringReverse()
    //---------------------------------------------------
console.log('*--Anonymous Function---*');

const Str_Rev = function() {
    let rev_str = ''
    for (let i = str.length - 1; i >= 0; i--) {
        rev_str += str.charAt(i)
    }
    console.log(rev_str);
}
Str_Rev()
    //---------------------------------------------------
console.log('*--Self Invoked Function---*');
(function(str) {
    let rev_str2 = ''
    for (let i = str.length - 1; i >= 0; i--) {
        rev_str2 += str.charAt(i)
    }
    console.log(rev_str2);
})(str)
//------------------------------------------------------------

console.log('*--Arrow Function(ES6 feature)---*');
const Str_Rev1 = () => {
    let rev_str = ''
    for (let i = str.length - 1; i >= 0; i--) {
        rev_str += str.charAt(i)
    }
    console.log(rev_str);
}
Str_Rev1()
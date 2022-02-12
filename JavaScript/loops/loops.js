/*
1. for  loop
//used for Array,String
for (var i=0;i<numbers.length;i++){
    //code
}
              0  1  2
var numbers=[10,20,30]
*/
console.log('*----for of loop------*');
//used for Arrays
/*
syntax -
for(var Local_name of name_of _array){
    console.log(Local_name)
}
*/

var numbers = [10, 20, 30, 40]
for (var number of numbers) {
    console.log(number);
}
console.log('--looping Array--');
var fruits = ['Apple', 'Mango', 'Bananna', 'Grapes', 'PineApple']
for (var fruit of fruits) {
    console.log(fruit);
}

console.log('*----for in loop------*');
// used for Objects ,Arrays

// Syntax:-
// for (var key in Obj) {
//     console.log(Obj[key]);
// }


console.log('--loop through the Object---');
//for in using for Objects
var person = {
    firstname: 'Charan',
    lastname: 'Teja',
    age: 25,
    gender: 'Male'
}
console.log('----------');
//only values
for (var key in person) {
    console.log(person[key]);
}
console.log('----------');
//keys with values

for (var key in person) {
    console.log(`${key}-${person[key]}`);
}
console.log('----------');

//for in using for Arrays
for (var index in numbers) {
    console.log(numbers[index]);
}
console.log('----------');

for (var index in numbers) {
    console.log(`value at index ${index}-${numbers[index]}`);
}
console.log('----------');

for (var i in fruits) {
    console.log(fruits[i]);
}

//break can only be used for loops and switch cases 
//in other places it is illegal(can't use in statements)
//foreach   is a function not loop
console.log('----------'); //empty arrays cosidered as undefined
var arr = [10, 20, 30, 40, 50, , , , , , 100]
console.log(arr);
for (var i = 0; i < arr.length; i++) {
    console.log(`${i}-${arr[i]}`);
}
console.log('----------'); //empty arrays are ignored
for (var index in arr) {
    console.log(`${index}-${arr[index]}`);

}
console.log('----------');
var arrData = [10, 20, 30]
arrData[3] = 80
arrData['price'] = 700
console.log(arrData);
//ignores the elements which does not have index
for (var i = 0; i < arrData.length; i++) {
    console.log(`${i}-${arrData[i]}`);
}

console.log('----------');
//considers the elements which does not have index
for (var i in arrData) {
    console.log(`${i}-${arrData[i]}`);
}
console.log('----------');
var pens = [{
            brand: 'parker',
            color: 'Black',
            price: 125,
            Type: 'Ball Point Pen'
        },
        {
            brand: 'Reynolds',
            color: 'Blue',
            price: 10,
            Type: 'Ball Point Pen'
        },
        {
            brand: 'Elkons',
            color: 'red',
            price: 5,
            Type: 'Gel Pen'
        }
    ]
    //for loop -> price > 5 print Objects
for (var i = 0; i < pens.length; i++) {
    if (pens[i].price > 5) {
        console.log(pens[i]);
    }
}
console.log('----------');

//for of -> loop if type=='Ball Point Pen' && price > 5 print Objects
for (var pen of pens) {
    if (pen.price > 5 && pen.Type == 'Ball Point Pen') {
        console.log(pen);
    }
}
console.log('----------');

//for in loop -> if brand length > 5 && price > 10 print Objects
for (const index in pens) {
    if (pens[index].brand.length > 5 && pens[index].price > 10) {
        console.log(pens[index]);
    }
}
// Arrays
var names = ['Puneeth', 'Darshan', 'Rajini', 'Ajith']
console.log(names);
console.log(names.length); //lebgth of an array

//accesing data in array by index 
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

console.log('-----------------------');

for (var i = 0; i < 5; i++) {
    console.log('Hello');
}

console.log('-----------------------');
for (var i = 0; i < names.length; i++) {
    // debugger
    console.log(names[i]);
}

console.log('-----------------------');
//we can use any datatype in a array
var myarray = ['Ajay', 34, true, undefined, null, { color: 'black' },
    ['black', 'blue', 'red']
]

console.log(myarray[2]); //true
console.log(myarray[4]); //null
console.log(typeof(myarray[3])); //undefined
console.log(myarray.length); //7
console.log(myarray[5].length); //undefined
console.log(myarray[5].color); //black
console.log(myarray[5]['color']); //black
console.log(myarray[5]['col or']); //undefined
console.log(myarray[6].length); //3
console.log(myarray[6][0]); //black
console.log(myarray[6][2 - 1]); //blue

console.log('-----------------------');

//array of objects

var books = [{
        Author: 'Chetan Bhagat',
        Title: 'Two States',
        Price: 80,
        NoOfPages: 265,
        Publisher: 'Sapna'
    },
    {
        Author: 'Paulo Cohello',
        Title: 'Alchemist',
        Price: 180,
        NoOfPages: 250,
        Publisher: 'Harper Torch'
    },
    {
        Author: 'PoornaChandra Tejaswi',
        Title: 'Chidambara Rahasya',
        Price: 340,
        NoOfPages: 500,
        Publisher: 'Sahitya Bhandara'
    }
]

console.log(books[0].Author)
    //console.log(books[1])
    //console.log(books[2])

for (var i = 0; i < books.length; i++) {
    console.log(books[i]);
}

//Array creation using new keyword
var arr = new Array(10)
console.log(arr.length); //10
console.log(arr[0]); //undefined

console.log('-----------------------');

var number = new Array(20, 30)
console.log(number.length); //2
console.log(number[0]); //20
console.log(number[1]); //30
number[2] = 67 //adding value
console.log(number[2]); //67

console.log('-----------------------');
var color = new Array('blue') //if u give string it takes as a value

console.log(color.length); //1
console.log(color[0]); //blue
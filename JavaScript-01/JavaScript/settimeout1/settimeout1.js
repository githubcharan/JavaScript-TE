console.log('start')

setTimeout(function(){
    console.log('ABC');
},3000)

console.log('111');

setTimeout(function() {
    console.log('DEF');
},2000)

console.log('123');

setTimeout(function(){
    console.log('222');
},0)

console.log('456');
console.log('end')
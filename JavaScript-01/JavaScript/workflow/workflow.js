console.log('start')

function add(a, b) {
    setTimeout(() => {
        console.log('111');
    }, 2000);

    console.log(a + b);
}

add(10,30)

setTimeout(function () {
    console.log('ABC');
}, 3000)

console.log('end');







console.log('started');
new Promise(function (resolve, reject) {
    if (10 > 4) {
        resolve('success')
    } else {
        reject('Error')
    }
}).then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.log(err)
})

function greet() {
    console.log('greeet func');
}
greet()
console.log('ended');


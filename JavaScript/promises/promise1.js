console.log('program started');
let age = 18
const validAgePromise = new Promise((resolve, reject) => {
    console.log(age);
    if (age >= 18) {
        resolve('Eligible for voting')
    } else {
        reject('not Eligible for voting')
    }
})
validAgePromise.then((success) => {
    console.log(success);
}).catch((err) => {
    console.log(err);
})
console.log('program ended');
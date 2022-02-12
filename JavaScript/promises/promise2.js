console.log('program started');
let age = 0

function agePromise() {
    return new Promise((resolve, reject) => {
        console.log(age);
        if (age >= 18) {
            resolve('Eligible for voting')
        } else {
            reject('not Eligible for voting')
        }
    })
}
// exicuted on page loaded 1st time
/*
agePromise().then((success) => {
    console.log(success);
}).catch((err) => {
    console.log(err);
});
*/
function validateAge() {
    age = document.getElementById('age').value
    agePromise().then((success) => {
        console.log(success);
    }).catch((err) => {
        console.log(err);
    });
}
console.log('program ended');
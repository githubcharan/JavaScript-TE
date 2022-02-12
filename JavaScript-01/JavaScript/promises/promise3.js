console.log('program started');
let age = 0
function agePromise() {
   return new Promise((resolve, reject) => {
        console.log(age);
        if (age >= 18) {
            resolve('Eligible for Voting')
        } else {
            reject('Not eligible for Voting')
        }
    })
}

function validateAge() {
    age = document.getElementById('age').value
    agePromise().then((success) => {
        console.log(success);
    }).catch(err => {
        console.log(err);
    })
}
console.log('program ended');


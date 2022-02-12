console.log('Started');

const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([100, 200, 300, 400])
    }, 3000);
})
const myPromise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([900, 1000, 1200])
        }, 5000);
    })
    /*
    if all promises are resolved then the function will be executed and it will combine the resolved data into array.
    if any one promise is rejected also catch function will be excuted
    */
Promise.all([myPromise1, myPromise2]).then(data => {
    console.log('Data', data);
}).catch(err => {
    console.log('Err', err);
})


/*
whichever promise if first resolved only that promise data will be received
*/
Promise.race([myPromise1, myPromise2]).then(data => {
    console.log('Data', data);
}).catch(err => {
    console.log('Err', err);
})

console.log('ended');
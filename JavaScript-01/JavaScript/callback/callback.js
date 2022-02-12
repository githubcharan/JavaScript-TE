function first(callback) {
    // console.log(callback);
    setTimeout(() => {
        console.log('first executed');
        callback()
    }, 0)
}
function second() {
    console.log('second executed');
}

first(second)
console.log('----------------------------');

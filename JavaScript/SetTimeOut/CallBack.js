function first(Callback) {
    //console.log(Callback);  // Callback is a variable name .we can give any name
    setTimeout(() => {
        console.log('First Executed');
        Callback() //should be same name which is given as parameter
    }, 0)
}

function second() {
    console.log('second executed');
}
first(second);


function first(Callbacks) {
    setTimeout(() => {
        console.log('haii')
        Callbacks()
    }, 0)
}

function second() {
    console.log('helo')
}
first(second)
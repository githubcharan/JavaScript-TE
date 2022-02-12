//closures
function outer() {
    let count = 0

    function inner() {
        console.log('inner func');
        count = count + 1
        console.log('count', count);
    }
    return inner
}

const innerFunc = outer()
innerFunc()
innerFunc()
innerFunc()
innerFunc()
innerFunc()

/*
What is the use ? why we use?
1.to preserve the value
2.for data privacy
*/
function increaseCounter() {
    let counter = 0

    function counterUpdate() {
        counter = counter + 1
        console.log(counter);
        return counter
    }
    return counterUpdate
}
const counterIncrease = increaseCounter()
counterIncrease()
counterIncrease()
counterIncrease()
counterIncrease()
counterIncrease()
    //there is a possibility counter will be 0 if increase counter is called again
const c = increaseCounter()
c()
c()
c()
c()

function increaseCounter() {
    let counter = 0

    function counterUpdate() {
        counter = counter + 1
        console.log(counter);
        return counter
    }
    return counterUpdate
}
/*
self invoke function will be executed only once
hence counter cannot be reinitialized to 0 again 
only counterUpdate function will be able to change the counter variable value
*/
const counterInc = (function() {
    let counter = 0

    function counterUpdate() {
        counter = counter + 1
        console.log(counter);
        return counter
    }
    return counterUpdate
})()
counterInc()
counterInc()
counterInc()
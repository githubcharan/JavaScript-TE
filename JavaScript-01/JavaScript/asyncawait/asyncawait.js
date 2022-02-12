const url = 'https://jsonplaceholder.typicode.com/posts'
async function fetchPosts() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    } finally {
        // lines of code to be executed if there is error 
        //  or no error
        console.log('hello')
        console.log('finally block');
    }
}

fetchPosts()
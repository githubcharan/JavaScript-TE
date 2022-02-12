const url = 'https://jsonplaceholder.typicode.com/posts'
async function fetchPost() {
    try { //try block
        const respond = await fetch(url)
        const data = await respond.json()
        console.log(data);
    } catch (err) { //catch block
        console.log(err);
    } finally { //finally block
        //lines of code to be executed if there is error or no error
        console.log('hello');
        console.log('finally block');
    }
}
fetchPost()
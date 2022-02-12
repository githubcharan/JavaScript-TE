const url = 'https://jsonplaceholder.typicode.com/posts'
const fetchPosts = () => {
    fetch(url).then((response) => {
        console.log(response);
        return response.json()
    }).then((data) => {
        console.log(data);
        let postsData = '<ul>'
        data.map((post) => {
            //Template literals (ES6)
            postsData += `<li>${post.title}</li>`
        })
        postsData += '</ul>'
        const divElement = document.getElementById('users')
        divElement.innerHTML = postsData
        console.log('postsData', postsData);
    }).catch(err => {
        console.log(err);
        console.error(err.message);
    })
}
fetchPosts()

function savePost() {
    const post = {
        userId: 1000,
        title: 'Javascript end game',
        body: 'Javascript Javascript'
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        console.log(response);
        return response.json()
    }).then(data => {
        console.log('Added post', data);
    })
}


//async and await keywords
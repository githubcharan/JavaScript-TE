const url = 'http://jsonplaceholder.typicode.com/posts'
const fetchPosts = () => {
    fetch(url, { method: 'GET' }).then((response) => {
        console.log(response);
        return response.json()
    }).then((data) => {
        console.log(data);
        let postsData = '<ul>'
        data.map((post) => {
            // Template literals (ES6)
            postsData += `<li>${post.title}</li>`
        })
        postsData += '</ul>'
        const divElement = document.getElementById('users')
        divElement.innerHTML = postsData
        console.log('postsData', postsData);
    }).catch(err => {
        console.log(err);
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
    }).catch(err=>{
        console.log(err);
    })
}

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//        // Typical action to be performed when the document is ready:
//        console.log('Using xmlhttprequest');
//        console.log(JSON.parse(xhttp.responseText));
//     //    document.getElementById("demo").innerHTML = xhttp.data;
//     }
// };
// xhttp.open("GET","https://jsonplaceholder.typicode.com/posts", true);
// xhttp.send();

fetch(url).then((response) => {
    console.log(response);
    return response.json()
}).then((data) => {
    console.log(data);
}).catch(err => {
    console.log(err);
    console.error(err.message);
})


const url = 'https://jsonplaceholder.typicode.com/posts'

function myFunction() {
    let input = document.getElementById('myInput').value;
    let filter = input.toUpperCase();
    let ol = document.getElementById('myOl')
    let li = document.getElementsByTagName('li')

    for (let i = 0; i < li.length; i++) {

        let a = li[i].getElementsByTagName("a")[0];
        let textVal = a.textContent || a.innerText;

        if (textVal.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function asscending() {
    fetch(url, { method: 'GET' }).then((response) => {
        console.log(response);
        return response.json()
    }).then((data) => {
        console.log(data);
        let postsData = "<ul>"
        data.map((post) => {
            postsData += `<li><a herf='#'>${post.id}.) ${post.title}</a></li>`
        })
        postsData += '</ul>'
        const divElement = document.getElementById('id')
        divElement.innerHTML = postsData
        console.log('postsData', postsData);
    }).catch(err => {
        console.log(err);
        console.error(err.message);
    })

}

function descending() {

    fetch(url, { method: 'GET' }).then((response) => {
        console.log(response);
        return response.json()
    }).then((data) => {
        console.log(data);
        let revData = data.reverse()
        let postsData = "<ul>"
        revData.map((post) => {
            //template literals (ES6)
            postsData += `<li><a herf='#'>${post.id}.) ${post.title}</a></li>`
        })
        postsData += '</ul>'
        const divElement = document.getElementById('id')
        divElement.innerHTML = postsData
        console.log('postsData', postsData);
    }).catch(err => {
        console.log(err);
        console.error(err.message);
    })

}
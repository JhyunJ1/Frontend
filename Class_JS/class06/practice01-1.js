const title = document.getElementById('title');
const body = document.getElementById('body');

async function getPost(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let data = await response.json();
    return data;
}

async function putPost(id) {
    let post = {
        title: document.getElementById('title').value,
        body: document.getElementById('body').value,
    }   
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json',
        },
    });
    let data = await response.json();
    console.log(data);
}

async function insertPost() {
    let post = await getPost(1);
    title.value = post.title;
    body.value = post.body;
}

insertPost();


function complete() {
    putPost(1);
}
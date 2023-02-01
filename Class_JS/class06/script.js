// async function getPost(id) {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     let data = await response.json();
//     return data;
// }

// async function insertPost(id) {
//     let data = await getPost(id); // await 로 데이터를 가지고 왔을 때 밑에 부분 실행
//     let title = document.getElementById('title');
//     title.innerText = data.title;
//     let body = document.getElementById('body');
//     body.innerText = data.body;
// }

async function addPost(post) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json'
        }
    })
    let data = await response.json();
    return data;
}

async function submitPost() {
    let post = {
        title: document.getElementById('title').value,
        body: document.getElementById('body').value
    }
    let result = await addPost(post);
    console.log(result);
}


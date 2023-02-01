const title = document.getElementById('title');
const body = document.getElementById('body');

async function getPost(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let data = await response.json();
    return data;
}

async function putPost(post, id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(post), // json 형태로 데이터 변환
        headers: { // 백엔드한테 어떤 타입의 데이터인지 header로 보냄
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


async function complete() {
    let post = {
        title: document.getElementById('title').value,
        body: document.getElementById('body').value,
    } 
    putPost(post, 1);
}
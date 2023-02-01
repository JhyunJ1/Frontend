
async function getPosts() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = response.json();
    console.log(data)
    return data;
}

async function getPost() {
    let response = await fetch('const posts = await getPosts();')

}

async function deletePost(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    });
}

async function insertPost() {
    const posts = await getPosts();
    posts.forEach(post => {
        console.log(post.id)
        document.body.insertAdjacentHTML('afterBegin',`
            <div id='post'>
                <h1 id='title'>${post.title}</h1>
                <p id='body'>${post.body}</p>
            </div>
            <button onclick="deletePost(${post.id})">삭제하기</button>
        `);
    }); 
}



insertPost();

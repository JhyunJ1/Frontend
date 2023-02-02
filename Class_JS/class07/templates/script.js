const SERVER_URL = 'http://127.0.0.1:8000'

async function postArticle(article) {
  let response = await fetch(`${SERVER_URL}/blog/article`,{
    method: 'POST',
    body: JSON.stringify(article), // json 객체로 만들기
    headers: {
      'Content-type': 'application/json',
    },
  });
  let data = await response.json(); // 응답을 json 객체에서 자바스크립트 객체화
  return data
}

async function submitArticle() {
    let article = {
      title: document.getElementById('title').value,
      content: document.getElementById('content').value,
    }
    let result = await postArticle(article);
    console.log(result);
  }

async function getArticle(id) {
  let response = await fetch(`${SERVER_URL}/blog/article/${id}`);
  let data = await response.json(); // 여기도 꼭 await 를 해주어야 함
  return data;
}

async function insertArticle(id) {
    let data = await getArticle(id);
    let title = document.getElementById('title');
    let content = document.getElementById('content');
    title.innerText = data.title;
    content.innerText = data.content;
}

async function getArticlelist() {
    let response = await fetch(`${SERVER_URL}/blog/article`);
    let data = await response.json();
    return data;
}

async function insertArticlelist() {
    let articles = await getArticlelist();
    articles.forEach(article => {
        document.body.insertAdjacentHTML('afterBegin',`
        <div id='${article.id}'>
            <h1 id='title'>${article.title}</h1>
            <p id='content'>${article.content}</p>
            <button onclick="deleteArticle(${article.id})">Delete</button>
        </div>
        
    `);
    })
}


async function deleteArticle(id) {
    let response = await fetch(`${SERVER_URL}/blog/article/${id}`, {
        method: 'DELETE',

    });

    if (response.status === 204) { // 예외처리
        let article = document.getElementById(id);
        article.remove(); // 왜 나는 바로 안지워지지??
    }
    
}

async function get_modifyArticle(id) {
    let title = document.getElementById('title');
    let content = document.getElementById('content');

    let response = await fetch(`${SERVER_URL}/blog/article/${id}`);
    let article = await response.json();
    

    title.value = article.title;
    content.value = article.content;

}

async function modifyArticle(article, id) {
    let response = await fetch(`${SERVER_URL}/blog/article/${id}`, {
        method: 'PUT',
        body: JSON.stringify(article),
        headers: {
            'Content-type': 'application/json',
        },
    });
    let data = await response.json()
    return data;
}

async function modify() {
    let title = document.getElementById('title');
    let content = document.getElementById('content');
    let article = {
        title: title.value,
        content: content.value,
    };
    return modifyArticle(article, 1);
}
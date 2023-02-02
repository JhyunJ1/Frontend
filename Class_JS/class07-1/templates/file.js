const SERVER_URL = 'http:/127.0.0.1:8000'


async function postImage(formData) {
  let response = await fetch(`${SERVER_URL}/blog/image`, {
    method: 'POST',
    body: formData, // json 형태로 주지 않음 -> 장고에서 알아서 해석해서 받음
  })
  let data = await response.json();
  return data;
}



async function submitImage() {
  let form = document.getElementById('form');
  let imageFormData = new FormData(form); // 백엔드로 전송할 수 있는 데이터 // {[name]: 파일} 형태로 데이터 전송 
  let result = await postImage(imageFormData);
  console.log(result);
}



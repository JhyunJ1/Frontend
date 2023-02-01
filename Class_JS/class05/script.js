// 이벤트가 버블링 되지 않게 누른 요소만 해당되도록 하는 방법
const buttonClick = (event) => { // event 를 매개변수로 받음;
    event.stopPropagation(); // 부모 요소로의 이벤트 버블링을 중지
    alert('버튼을 눌렀습니다!');
}


const highlight = (element) => {
    element.classList.add('highlight');
}

let menu = document.getElementById('menu');
menu.addEventListener('click', (event) => {
    highlight(event.target)
})
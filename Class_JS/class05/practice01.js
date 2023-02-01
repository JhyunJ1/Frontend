id = document.getElementById('id');
pw = document.getElementById('pw');

onFocus = (event) => {
    event.target.style.width = '200px';
    event.target.style.height = '60px';
}

onBlur = (event) => {
    event.target.style.width = '100px';
    event.target.style.height = '30px';
}

onKeyDown = (event) => { // 커지는 함수, 작아지는 함수 분리
    let now = event.target.style.width
    now = Number(now.replace('px', ''))
    // parseInt(event.target.style.width) -> 100 만 나옴
    
    if (event.key === 'Backspace') {
        now -= 10;
    }
    else {
        now += 10;
    }
    event.target.style.width = String(now) + 'px';
}

mouseDown = (event) => {
    event.target.style.backgroundColor = 'blue';
}

mouseUp = (event) => {
    event.target.style.backgroundColor = 'white';
}

id.addEventListener('focus', onFocus);
id.addEventListener('blur', onBlur);
pw.addEventListener('focus', onFocus);
pw.addEventListener('blur', onBlur);

id.addEventListener('keydown', onKeyDown);
pw.addEventListener('keydown', onKeyDown);

id.addEventListener('mouseup', mouseUp);
id.addEventListener('mousedown', mouseDown);
pw.addEventListener('mouseup', mouseUp);
pw.addEventListener('mousedown', mouseDown);



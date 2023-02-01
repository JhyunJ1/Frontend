const moveImage = (img, x, y) => {
    img.style.left = x - (img.offsetWidth / 2);
    img.style.top = y - (img.offsetHeight / 2);
}

// mouse가 눌려 있는 동안에만
const onMouseDown = (event) => { // event -> 마우스 처음 클릭했을때
    const img = event.target;
    img.style.position = 'absolute'; // 절대적인 위치를 가짐 -> 다른 요소의 위치에 영향을 받지 않음.
    
    const moveTargetByEvent = (e) => moveImage(img, e.pageX, e.pageY); // pageX : 현재 전체 페이지에서 x y 좌표
    // 마우스를 움직이는 동안의 event 갖고와서 활용해야함
    document.addEventListener('mousemove', moveTargetByEvent);

    img.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', moveTargetByEvent);
    })
}

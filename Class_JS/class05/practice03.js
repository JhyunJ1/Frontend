
function appendDiv(callback) {
    let div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    setTimeout(() => {
        document.body.append(div);
        callback(div); 
    }, 2000);
}


appendDiv( (div) => {
    div.style.backgroundColor = 'lightblue';
}  )
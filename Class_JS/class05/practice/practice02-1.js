let items = document.getElementsByClassName('item');
let now = 0

const prev = () => {
    now -= 1;
    for(let item of items) {

        item.style.transform = `translate(${now * -100}%)`;
    }
    
}



const next = () => {
    now += 1;
    for(let item of items) {
        item.style.transform = `translate(${now * -100}%)`;
    }
    
}
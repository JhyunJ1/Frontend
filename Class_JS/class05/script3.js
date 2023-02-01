const next = () => {
    let items = document.getElementsByClassName('item'); // collections
    for (let item of items) {
        item.style.transform = `translate(-100%)`;
    }
}
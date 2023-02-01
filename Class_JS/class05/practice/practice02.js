let modal = document.getElementById('modal');


const showModal = () => {
    modal.style.display = 'flex';
    modal.style.animation = 'fadein 2s'
}

const closeModal = () => {
    modal.style.animation = 'fadeout 2s';
    setTimeout(() => modal.style.display = 'none', 2000);
}


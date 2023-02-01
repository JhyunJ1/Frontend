const TIMEZONE = {
    'london': 'Europe/London',
    'newyork': 'America/New_York',
    'seoul': 'Asia/Seoul'
}   
let timer;

function setTimeByCountry(country) {
    let now = new Date().toLocaleString('ko-KR', { timeZone: TIMEZONE[country] })
    let currentTime = document.getElementById('currentTime');
    currentTime.innerText = now;
}

function setTime(event) {
    clearInterval(timer);
    setTimeByCountry(event.target.id);
    return timer = setInterval(setTimeByCountry, 1000, event.target.id);
}

let country = document.getElementById('country');
country.addEventListener('click', (event) => {
    setTime(event);
})
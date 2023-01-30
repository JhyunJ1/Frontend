// 1번
function mulTen(num) {
    for(let i = 1; i <= 10; i++) {
        console.log(num * i);
    }
}

// 2번
function addTen(num) {
    let res = 0;
    for(let i = 1; i <= 10; i++) {
        res += (num * i);
    }
    return res;
}

// 3번
function isChild(name, age) {
    let res;
    if (age < 20) {
        res = '미성년자';
    } else {
        res = '성인';
    }
    alert(`${name}님은 ${res}입니다.`);
}



function t1() {
    // Math.random() : 0부터 1 사이의 랜덤한 숫자를 뽑음
    // Math.floor() : 숫자 내림
    // 가위 0 바위 1 보 2

    user = Number(prompt('가위~ 바위~ 보!'));
    com = Math.floor(Math.random() * 3);


    if (user === '가위') {
        switch(com) {
            case 0: alert('비김!'); break;
            case 1: alert('짐!'); break;
            case 2: alert('이김!'); break;
        }
    } else if (user === '바위') {
        switch(com) {
            case 1: alert('비김!'); break;
            case 2: alert('짐!'); break;
            case 0: alert('이김!'); break;
        }
    } else {
        switch(com) {
            case 2: alert('비김!'); break;
            case 0: alert('짐!'); break;
            case 1: alert('이김!'); break;
        }
    }
}

function t2() {
    answer = Math.floor(Math.random() * 100) + 1;

    while(true) {
        user = prompt('choice!');
        if (user > answer) {
            alert("다운!");
        } else if (user < answer) {
            alert("업!");
        } else {
            alert("정답!");
            break;
        }
    }
}

function t3() {
    num = 0
    while(true) {
        user = Number(prompt(`베스킨라빈스 31~ | 현재: ${num}`));
        num += user;
        if (now > 30) {
            alert('패배!')
            break;
        }

        com = Math.floor(Math.random()*3) + 1;
        num += com;
        if (now > 30) {
            alert('승리!')
            break;
        }
    }
}

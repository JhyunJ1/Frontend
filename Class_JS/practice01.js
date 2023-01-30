   
// 1번
let score = Number(prompt('당신의 점수는?', 0));
let result;
if (score >= 95) {
    result = 'A';
} else if (score >= 90) {
    result = 'B';
} else if (score >= 85) {
    result = 'C';
} else {
    result = 'F';
}
alert(result)

// 2번
num1 = Number(prompt('첫 번째 숫자를 입력하세요.'))
num2 = Number(prompt('두 번째 숫자를 입력하세요.'))

isit1 = num1 % 2 === 0
isit2 = num2 % 2 === 0

if (isit1 && isit2) {
    alert('짝수입니다.')
} else if (!(isit1) && !(isit2)){
    alert('홀수입니다.')
}
let a = 'hello'; // 값이 변할 수 있는 변수를 선언하겠다.
a = 'bye';

alert(a);
console.log("Hello, world~");

const b = 'Hello';  // 값이 변할 수 없는 변수를 선언하겠다. (상수)

let c; // undefined
c = 'asdf';

// 변수명은 camelCase로 

x = 5;
x++; // x += 1 x = x + 1
alert(x);

// 백틱 기능 ( ` )

let fruits = `
안녕
반가워
`

// 문자열 삽입
// 백틱 사용 후 ${} 안에 변수 삽입
let name = '장현지';
alert(`안녕하세요 ${name} 입니다`);


// 문자열 인덱싱
let str = 'Hello, world';
str.slice(0, 5);

alert(str.length)

// 문자열 슬라이싱
str = 'hello, world';
alert(str.split(' '[0]));

alert(str.includes('hello')) // 문자열을 포함하고 있는지

// === : 값과 자료형이 같다.-> 불린과 숫자 (0,false / 1,true) 사이에서도 가능

// prompt

let input = prompt('이름을 입력하세요. ', '디폴트값');
alert(`이름은 ${input}`)

// confirm (불린형 prompt)
input = confirm('글을 삭제하시겠습니다')
alert(input)

// if 문
x = 3;
if (x === 3) {
    alert(`x는 ${x} 입니다.`);
}

// 비교연산의 결과를 변수에 저장
x = 1
const isThree = (x === 3);
if (isThree) {
    alert('x는 3입니다.');
}

let age = prompt('나이가 어떻게 되세요?', '');
if (age > 18) {
    alert('성인');
} else if (age > 10) {
    alert('청소년')
} else {
    alert('응애')
}

// 삼항연산자
age > 18 ? alert('성인') : age > 10 ? alert('청소년') : alert('미성년자');

// 타입 변환
age = '1';
numAge = Number(age);
strAge = String(age);

// 타입 확인
age = prompt('나이를 입력해주세요', '')
alert(typeof age)

// switch 문
let device = 'Desktop';

switch(device) {
    case "Desktop":
        alert('데스크탑 입니다');
        break
    case "Tablet":
        alert('태블릿 입니다');
        break
    case "Mobile":
        alert('모바일 입니다');
        break
    default:
        alert('알 수 없습니다.');
}

// 반복문
let i = 0;

while (i < 3) {
    alert(i);
    i++;
}

for (i = 0; i < 3; i++) {
    alert(i);
}
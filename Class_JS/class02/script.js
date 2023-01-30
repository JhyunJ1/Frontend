let msg = '난 전역스코프';

function showMsg() {
	let msg = '난 함수스코프';
	if (true) {
		let msg = '난 블록스코프'; // 함수 밖에 msg가 있지만, 여기서 선언한 msg가 우선됨 (블록스코프) 
		alert(`블록스코프:${msg}`);
	}
	alert(`함수스코프:${msg}`);
}

showMsg();
alert(`전역스코프:${msg}`);


function sum(a, b) {
    return a + b
}

// let sum = function(a,b) {
//     return a + b;
// }

// 화살표 함수
let hello = (a, b) => {
    return a + b
}

// 객체
let name = 'Kim'
const user = {
    name, // name: name
    age: 20
};
// user = {}' // 에러 발생
user.age = 30; // 에러 발생 X
console.log(user.age);
/* 상수로 표기해도 객체 안의 properties는 수정 가능하다. */
console.log(user['age']); // alert로 출력 시 object라고만 출력

console.log("age" in user);
console.log("email" in user);

console.log('user의 키');
for (let key in user) {
    console.log(key);
    console.log(user.key);
}

Object.keys(user); // new Object();의 object 의미 -> user 객체의 키만 추출 ['name', 'age']
Object.values(user); // return ['Kim', 20]
Object.entries(user); // return [['name', 'Kim'], ['age', 20]]
Object.hasOwn(user, 'name'); // 'name' key 값이 존재하는지 여부 확인

// 얕은 복사, 깊은 복사

// 얕은 복사
let msg1 = '안녕'
let msg2 = msg1 // 안녕
msg2 = '잘가'
console.log(msg1) // 안녕

// 깊은 복사
let user1 = {
    name: 'Jang'
}
let user2 = user1;
user1.name = 'Lee';
console.log(user2.name); // Lee -> 바로가기 느낌이 되어버림

// 객체는 그럼 어덯게 얕은 복사를 할까?
// 1.
user2 = {}
for (let key in user1) {
    user2[key] = user1[key];
}
// 2.
// Object.assign(속성 추가 당할 객체, 속성을 가져올 객체)
user2 = Object.assign({}, user1);
user1.name = 'Kim';
console.log(user2.name);


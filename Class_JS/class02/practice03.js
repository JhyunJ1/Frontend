// 1번
let scores = {
    Kim: {math: 50, english: 70},
    Park: {math: 70, english: 60},
    Lee: {math: 80, english: 50}
};
let arr = Object.values(scores)
let res = arr.reduce((sum, cur) => sum + cur.english, 0);
console.log(res)

// 2번
let students = [
    {id: 1, name: 'Kim', score: {math: 50, english: 70}},
    {id: 2, name: 'Park', score: {math: 80, english: 60}},
    {id: 3, name: 'Lee', score: {math: 70, english: 50}},
];
res = students.filter(student => student.score.math > 60);
console.log(res)

// 3번
let students_2 = [
    {id: 1, name: 'Kim', score: {math: 50, english: 70}},
    {id: 2, name: 'Park', score: {math: 80, english: 60}},
    {id: 3, name: 'Lee', score: {math: 70, english: 50}},
];
res = students_2.map(student => {
    return {
        id: student.id, 
        name: student.name, 
        score: student.score, 
        sum: student.score.math + student.score.english
    };
})
console.log(res)



// 1번
let scores = {
    Kim: 50,
    Park: 70,
    Lee: 80
};
sum = 0
for(let key in scores.key) {
    sum += scores.key;
}
console.log(sum);


// 2번
let player = {
    hp: 80,
    mp: 50,
    heal: function() {
        this.hp += 10;
        this.mp -= 10;
    }
};

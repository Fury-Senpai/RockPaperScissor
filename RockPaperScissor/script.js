
let count = 0;
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    loose: 0,
    tie: 0
};

score = JSON.parse(localStorage.getItem('score'));
const elem = document.querySelector('.js-result')
    
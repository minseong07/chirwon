// JavaScript 코드
const targetNumber = Math.floor(Math.random() * 10000) + 1;
let attempts = 0;

function checkGuess() {
    const userGuessElement = document.getElementById('userGuess');
    const messageElement = document.getElementById('message');
    const userGuess = parseInt(userGuessElement.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10000) {
        messageElement.innerText = '1부터 100 사이의 유효한 숫자를 입력하세요.';
        return;
    }

    attempts++;

    if (userGuess === targetNumber) {
        messageElement.innerText = `축하합니다! ${attempts}번 만에 숫자를 맞추셨습니다.`;
        userGuessElement.disabled = true;
    } else if (userGuess < targetNumber) {
        messageElement.innerText = '더 큰 숫자를 입력하세요.';
    } else {
        messageElement.innerText = '더 작은 숫자를 입력하세요.';
    }
}

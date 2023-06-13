const guessInput = document.getElementById("guess_input")
const hintArea = document.querySelector(".hint")
const guessBtn = document.getElementById("guess_btn")
const restartBtn = document.getElementById("restart_btn")
const showAnswerBtn = document.querySelector("#show_answer_btn")


let minNum, maxNum, answerNum, guessNum



function insertNum(event) {
    guessInput.value += event.target.textContent
}
document.querySelectorAll('.btn').forEach(function (el) {
    el.addEventListener('click', insertNum)
})

// btn1.addEventListener("click", insertNum);


showAnswerBtn.addEventListener("click", function () {
    alert(answerNum)
})

restartBtn.addEventListener("click", function () {
    init()
})

guessBtn.addEventListener("click", guess)

window.onload = function () {
    init()
}
function guess() {
    const val = guessInput.value.trim()
    if (val === '' || isNaN(val) || val[0] === '0') {
        alert('請輸入正確的數字')
        guessInput.value = ''
        return
    }
    guessNum = parseInt(val)

    if (isValidNumRange()) return

    if (guessNum === answerNum) {
        alert(`GG 答案是${answerNum}`)
        init()
        return
    }
    else if (guessNum < answerNum) {
        minNum = guessNum
    }
    else if (guessNum > answerNum) {
        maxNum = guessNum
    }
    guessInput.value = ''
    showHint()
}

function isValidNumRange() {
    if (guessNum < minNum || guessNum > maxNum) {
        showHint()
        guessInput.value = ''
        alert('請確認輸入範圍')
        return true
    }
    return false
}
function showHint() {

    hintArea.textContent = `請輸入${minNum} - ${maxNum}之間的數字`

}

function init() {
    guessInput.value = ''
    minNum = 1
    maxNum = 100
    answerNum = generateAnswer()
    guessBtn.disabled = false


    showHint()

}

function generateAnswer() {
    return getRandomInt(minNum, maxNum)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
// --- FUNZIONI ---
function mineField(numSquares, hook) {
    const father = document.querySelector(hook);
    for (let i = 1; i <= numSquares; i++) {
        const box = document.createElement('div')
        box.classList.add('box')
        box.id = i
        box.append(i)
        father.append(box)
    }
}

function numberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function bombGenerator(bombNumber, range) {
    const array = [];
    while (array.length < bombNumber) {
        const number = numberGenerator(1, range)
        if (!array.includes(number)) {
            array.push(number)
        }
    }
    return array;
}

function wichDiff(diff) {
    let triesNumber;
    if (diff === 0) {
        return triesNumber = 100
    } else if (diff === 1) {
        return triesNumber = 80
    } else {
        return triesNumber = 50
    }
}
// --- MAIN ---
const result = document.getElementById('result')
let difficulty

do {
    difficulty = Number(prompt(`Scegli un numero  tra 0 e 2`))
} while (isNaN(difficulty) || difficulty < 0 || difficulty > 2)

let maxDifficultyRange = wichDiff(difficulty)
mineField(maxDifficultyRange, '.field')

const bombs = bombGenerator(16, maxDifficultyRange)
console.log(bombs)

let userNumber
const userChoice = []
do {
    do {
        userNumber = Number(prompt('Inserisci un numero:'))
    } while (isNaN(userNumber) || userNumber < 1 || userNumber > maxDifficultyRange)

    if (!userChoice.includes(userNumber)) {
        userChoice.push(userNumber)
    }
    document.getElementById(`${userNumber}`).className = 'box clear' 
        if ((maxDifficultyRange - bombs.length) == userChoice.length) {
        result.append(`Hai vinto! Il tuo punteggio e' ${userChoice.length}`)
    }
        
} while (!bombs.includes(userNumber) && userChoice.includes(userNumber))

document.getElementById(`${userNumber}`).className = 'box bomb'

for (let i = 0; i < bombs.length; i++) {
    document.getElementById(`${bombs[i]}`).className = 'box bomb'
}
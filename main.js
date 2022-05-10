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


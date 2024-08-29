
let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset')
let msgContainer = document.querySelector('.msg-container');
let newBtn = document.querySelector('#new-game-btn');
let msgWinner = document.querySelector('#msg');


let turnO = true; //playerX playerO

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

// const resetGame = () => {
//     turnO = true;
//     enableBox();
//     // msgContainer.style.display = 'none';
//     msgContainer.classList.add('hide')

// }

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = 'O';
            turnO = false
        } else {
            box.innerHTML = 'X';
            // box.style.color = 'red'
            turnO = true
        }
        box.disabled = true

        checkWinner();
    })

})

// const disableBox = () => {
//     for (let box of boxes) {
//         box.disabled = true
//     }
// }
// const enableBox = () => {
//     for (let box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//     }
// }

// const setWinner = (winner) => {
//     msgWinner.innerText = `Congratulation Winner is ${winner}`;
//     // msgContainer.style.display = 'block';
//     msgContainer.classList.remove('hide')
//     disableBox()
// }


const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                // setWinner(pos1);
                console.log('winner', pos1)
            }
        }
    }
}

// newBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame)
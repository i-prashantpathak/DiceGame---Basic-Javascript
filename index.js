let heading = document.getElementById('heading');
let leftImg = document.getElementById('leftImg');
let rightImg = document.getElementById('rightImg');

// btn
let btnStart = document.getElementById('btn-start')

let leftRandomNumber;
let rightRandomNumber;

const LeftDice = () => {
    // random number generator
    leftRandomNumber = Math.floor(Math.random() * 6) + 1;
    leftImg.src = `img/${leftRandomNumber}.png`;
    leftImg.alt = `${leftRandomNumber}-png`;
}
const RightDice = () => {

    // random number generator
    rightRandomNumber = Math.floor(Math.random() * 6) + 1;
    rightImg.src = `img/${rightRandomNumber}.png`;
    rightImg.alt = `${rightRandomNumber}-png`;
}

const AnnounceWinner = () => {
    
    if (leftRandomNumber > rightRandomNumber) {
        heading.innerText = "Player 1 Wins!"
        document.title='Player 1 Wins!'
    }
    else if (rightRandomNumber > leftRandomNumber) {
        heading.innerText = "Player 2 Wins!"
        document.title='Player 2 Wins!'
    }
    else {
        heading.innerText = "Game Draw!"
        document.title='Game Draw!'
    }
}

const startGame = () => {
    LeftDice();
    RightDice();
    AnnounceWinner();
    setTimeout(() => {
        heading.innerText = "Press Start to Play!"; 
        rightImg.src = `img/1.png`;   
        rightImg.alt = `1.png`;   
        leftImg.src = `img/1.png`;
        leftImg.alt = `1.png`;
        document.title='Dice - Game';
    }, 2000);
}


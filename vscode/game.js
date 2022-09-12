const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);
let elementsSize
let canvasSize;

function setCanvasSize() {
    
    if (window.innerHeight > window.innerWidth) {
      canvasSize = window.innerWidth * 0.8;  
    } else {
        canvasSize = window.innerHeight * 0.8;  
    };
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementsSize = canvasSize;

    startGame();
};

function startGame() {
    elementsSize = (canvasSize / 10);

    game.font = (elementsSize - 12) + 'px Verdana';
    game.textAlign = 'end';
    for (let i = 1; i <= 10; i++) {
        game.fillText(emojis['X'], elementsSize * i, elementsSize);      
    };
};

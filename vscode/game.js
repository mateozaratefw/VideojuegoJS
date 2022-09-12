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

    game.font = (elementsSize) + 'px Verdana';
    game.textAlign = 'end';
    
    const map = maps[1]
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(
        row => row.trim().split('')
    );
    console.log(mapRowCols);

    for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 10; col++) {
            game.fillText(emojis[mapRowCols[row - 1][col - 1]], elementsSize *col , elementsSize * row);
        };     
    }; 
};

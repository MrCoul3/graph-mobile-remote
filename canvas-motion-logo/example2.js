const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let offsetX = 0;
let offsetY = 0;
const ARROW_RIGHT = 'ArrowRight';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';

// pattern

const patternCanvas = document.createElement('canvas');
patternCanvas.width = 100;
patternCanvas.height = 100;
const patternCtx = patternCanvas.getContext('2d');
patternCtx.fillStyle = '#fff';
patternCtx.fillRect(0, 0, 50, 50);
const pattern = ctx.createPattern(patternCanvas, 'repeat');
ctx.rect(0,0,400,400);
ctx.fillStyle = pattern;
ctx.fill();


function changeCoords(code) {
    if (code === ARROW_RIGHT ) {
        offsetX += 25;
    }
    if (code === ARROW_LEFT ) {
        offsetX = offsetX - 25;
    }
    if (code === ARROW_UP ) {
        offsetY = offsetY - 25;
    }
    if (code === ARROW_DOWN) {
        offsetY = offsetY + 25;
    }
}
function paint(x, y, code) {
    if (code === ARROW_RIGHT) {
        ctx.clearRect(x - 25, y , canvas.width, canvas.height);
    }
    if (code === ARROW_LEFT) {
        ctx.clearRect(x + 25, y , canvas.width, canvas.height);
    }
    if (code === ARROW_UP) {
        ctx.clearRect(x , y + 25 , canvas.width, canvas.height);
    }
    if (code === ARROW_DOWN) {
        ctx.clearRect(x , y - 25 , canvas.width, canvas.height);
    }

    ctx.fillStyle = pattern;
    ctx.fillRect(x,y,canvas.width,canvas.height);
}

document.addEventListener('keydown', (e) => {
    changeCoords(e.code)
    paint(offsetX, offsetY, e.code)

    console.log('offsetX : ', offsetX)
    console.log('offsetY : ', offsetY)
})
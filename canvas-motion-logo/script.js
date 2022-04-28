

const ARROW_RIGHT = 'ArrowRight';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';

let offsetX = 0;
let offsetY = 0;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const patternCanvas = document.createElement('canvas');
const patternContext = patternCanvas.getContext('2d');
patternCanvas.width = 50;
patternCanvas.height = 50;
patternContext.fillStyle = '#dc2424';
patternContext.strokeStyle = '#fff';
patternContext.lineWidth = 2;
patternContext.stroke();
patternContext.fillRect(0, 0, 50, 50);
const pattern = ctx.createPattern(patternCanvas, 'repeat');


ctx.fillStyle = pattern;
ctx.fillRect(0, 0, 400, 400);

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


function paintLogo(x, y, code) {
    ctx.fillStyle = pattern;
    if (code === ARROW_RIGHT) {
        ctx.clearRect(x - 25, y , 50, 50);
    }
    if (code === ARROW_LEFT) {
        ctx.clearRect(x + 25, y , 50, 50);
    }
    if (code === ARROW_UP) {
        ctx.clearRect(x , y + 25 , 50, 50);
    }
    if (code === ARROW_DOWN) {
        ctx.clearRect(x , y - 25 , 50, 50);
    }
    ctx.fillRect(x, y, 50, 50);

}
paintLogo(offsetX + 175, offsetY+175,null)
document.addEventListener('keydown', (e) => {

    changeCoords(e.code)
    paintLogo(offsetX + 175, offsetY+175, e.code)

    // if (offsetY <= 0) {
    //     paintLogo(offsetX, offsetY += 400, e.code)
    // } else {
    //     paintLogo(offsetX, offsetY = offsetY - 400, e.code)
    // }

    // paintLogo(offsetX + 400, offsetY, e.code)
    // paintLogo(offsetX - 400, offsetY, e.code)
    // paintLogo(offsetX, offsetY + 400, e.code)
    // paintLogo(offsetX, offsetY - 400, e.code)
    console.log('offsetX : ', offsetX)
    console.log('offsetY : ', offsetY)
})






const ARROW_RIGHT = 'ArrowRight';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';

let offsetX = 0;
let offsetY = 0;

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
    const canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
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
paintLogo(offsetX, offsetY, null)
document.addEventListener('keydown', (e) => {
    changeCoords(e.code)
    paintLogo(offsetX, offsetY, e.code)
})




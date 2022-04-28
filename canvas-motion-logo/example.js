var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Create a pattern, offscreen
const patternCanvas = document.createElement('canvas');
console.log(patternCanvas)
const patternContext = patternCanvas.getContext('2d');
console.log(patternContext)

// Give the pattern a width and height
patternCanvas.width = canvas.width;
patternCanvas.height = canvas.height;

// Give the pattern a background color and draw
patternContext.fillStyle = 'green';
patternContext.strokeStyle = 'blue';
patternContext.lineWidth = 2;
patternContext.rect(10, 20, 100, 100);
patternContext.fill();
patternContext.stroke();

const pattern = ctx.createPattern(patternCanvas, 'repeat');
const matrix = new DOMMatrix();

pattern.setTransform(matrix);

ctx.fillStyle = pattern;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillRect(50, 0, canvas.width, canvas.height);

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    matrix.translateSelf(1, 0.5);
    pattern.setTransform(matrix);

    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(loop);
}
// requestAnimationFrame(loop);

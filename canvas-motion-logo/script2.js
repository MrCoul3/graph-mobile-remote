// вариант решения (недоделан)

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
patternContext.fillStyle = '#fff';
patternContext.fillRect(0, 0, 50, 50);
const pattern = ctx.createPattern(patternCanvas, 'repeat');


function changeCoords(code) {
    if (code === ARROW_RIGHT) {
        offsetX += 25;
    }
    if (code === ARROW_LEFT) {
        offsetX = offsetX - 25;
    }
    if (code === ARROW_UP) {
        offsetY = offsetY - 25;
    }
    if (code === ARROW_DOWN) {
        offsetY += 25;
    }
}


function paintLogo(x, y, code) {
    ctx.fillStyle = pattern;

    if (code === ARROW_RIGHT) {
        ctx.clearRect(x - 25, y, 50, 50);
    }
    if (code === ARROW_LEFT) {
        ctx.clearRect(x + 25, y, 50, 50);
    }
    if (code === ARROW_UP) {
        ctx.clearRect(x, y + 25, 50, 50);
    }
    if (code === ARROW_DOWN) {
        ctx.clearRect(x, y - 25, 50, 50);
    }
    ctx.fillRect(x, y, 50, 50);

}

// стартовое положение
paintLogo(0, offsetY, null)

document.addEventListener('keydown', (e) => {

    changeCoords(e.code)
    let Xvalue = 0;
    let Yvalue = 0;

    /*if (offsetY !== null) {
        if (offsetY <= 0) {
            Yvalue = offsetY + 400;
        } else {
            Yvalue = offsetY - 400;
        }
    }
    if (offsetX !== null) {
        if (offsetX <= 0) {
            Xvalue = offsetX + 400;
        } else {
            Xvalue = offsetX - 400;
        }
    }

    if (Xvalue === 0) {
        offsetX = 0;
    }
    if (Yvalue === 0) {
        offsetY = 0;
    }*/
    paintLogo(offsetX, offsetY, e.code);

    if (offsetY === 400 || offsetY === -400) {
        offsetY =  0;
    }
    if (offsetX === 400 || offsetX === -400) {
        offsetX =  0;
    }
    let Xdelta = 0;
    let Ydelta = 0;
    if (offsetX < 0) {


        Xdelta = 400;
    }
    if (offsetX > 0) {
        Xdelta = -400;
    }
    if (offsetY < 0) {
        Ydelta = 400;
    }
    if (offsetY > 0) {
        Ydelta = -400;
    }
    paintLogo(offsetX + Xdelta, offsetY + Ydelta, e.code);
    // paintLogo(offsetX + 400, offsetY + 400, e.code);
    // if (e.code === ARROW_DOWN || e.code === ARROW_UP) {
    //     paintLogo(offsetX, offsetY - 400, e.code);
    //     paintLogo(offsetX, offsetY + 400, e.code);
    // }
    // if (e.code === ARROW_RIGHT || e.code === ARROW_LEFT) {
    //     paintLogo(offsetX-400, offsetY, e.code);
    //     paintLogo(offsetX+400, offsetY , e.code);
    // }

    // paintLogo(Xvalue, Yvalue, e.code)
    // console.log("%c Xvalue: ", "color: yellow" , Xvalue)
    console.log('%c offsetX : ',"color: yellow", offsetX)
    // console.log("%c Yvalue: ", "color: red", Yvalue)
    console.log('%c offsetY : ',"color: red", offsetY)


    /*    if (offsetY <= 0 && offsetX <=0) {
            paintLogo(offsetX + 400 , offsetY + 400, e.code)
            // paintLogo(offsetX + 400, offsetY, e.code)
        } else {
            paintLogo(offsetX - 400, offsetY, e.code)
            paintLogo(offsetX, offsetY - 400, e.code)
        }*/
    /* if (offsetX <= 0) {
         // paintLogo(offsetX, offsetY + 400, e.code)
         paintLogo(offsetX + 400, offsetY, e.code)
     } else {
         // paintLogo(offsetX, offsetY   - 400, e.code)
         paintLogo(offsetX - 400, offsetY, e.code)
     }*/
    // if (offsetY < -475 && offsetY < -875) {
    //     paintLogo(offsetX, offsetY + 800, e.code)
    //     paintLogo(offsetX + 400, offsetY, e.code)
    // } else {
    //     paintLogo(offsetX, offsetY   - 800, e.code)
    //     paintLogo(offsetX - 400, offsetY, e.code)
    // }
    // console.log(offsetY % 400, offsetY / 400)

})




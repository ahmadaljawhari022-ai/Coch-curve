const canvas = document.getElementById('kochCanvas');
const ctx = canvas.getContext('2d')

ctx.strokeStyle="#e67e22"
ctx.lineWidth= 2;

let currentAngle = 0 ;
let posX = 50 ;
let posY = 300;const drawKoch = ( length , depth )=>{

    if (depth === 0 ){
        let nextX = posX +  length * Math.cos(currentAngle);
        let nextY = posY +  length * Math.sin(currentAngle);
        ctx.lineTo(nextX, nextY);

        posX = nextX;
        posY = nextY;

    }else{

        let segment = length / 3 ;

        drawKoch(segment , depth -1);
        currentAngle -= Math.PI / 3 ; 
                              drawKoch(segment , depth -1 );
        currentAngle += 2* Math.PI /3;
                             drawKoch(segment ,depth -1 );
        currentAngle -= Math.PI/ 3; 
                             drawKoch(segment,depth -1);
    }
};
const init =()=>{
    ctx.clearRect(0 ,0, canvas.width,canvas.height);
    ctx.beginPath();
    ctx.moveTo(posX ,posY );
    drawKoch(700 ,2);
    ctx.stroke();
};
init();

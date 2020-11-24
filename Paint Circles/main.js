var mousevent="empty";
var last_position_of_x,last_position_of_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
width_of_line=1;

canvas.addEventListener("mouseup",myMouseup);

function myMouseup(e){
    mousevent="mouseup";
}

canvas.addEventListener("mouseleave",myMouseleave);

function myMouseleave(e){
    mousevent="mouseleave";
}

canvas.addEventListener("mousedown",myMouseDown);

function myMouseDown(e){
    mousevent="mousedown";
}

canvas.addEventListener("mousemove",myMousemove);

function myMousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if(mousevent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
console.log("last position of X and Y=")
console.log("X="+last_position_of_x+"Y="+last_position_of_y);

console.log("current position of X and Y=");
console.log("X="+current_x+"Y="+current_y);
ctx.arc(current_x, current_y, 40,0, 2 * Math.PI);
ctx.stroke();


    }
    last_position_of_x=current_x;
    last_position_of_y=current_y;
    
}


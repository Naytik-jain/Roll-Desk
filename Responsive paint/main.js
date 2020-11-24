
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var width=screen.width;
    var height=screen.height;
    
    new_width=width-40;
    new_height=height-300;

    canvas.addEventListener("touchstart", mytouchstart);


    if(width>992){
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
ctx.moveTo(last_position_of_x,last_position_of_y);



console.log("current position of X and Y=")
console.log("X="+current_x+"Y="+current_y);
ctx.lineTo(current_x,current_y);
ctx.stroke()


    }
    last_position_of_x=current_x;
    last_position_of_y=current_y;

    
}


    }


    if(width<992){
        document.getElementById("myCanvas").height=new_height;
        document.getElementById("myCanvas").width=new_width;
    }
    
    function mytouchstart(e)
    {
        
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
 

       last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;

       last_position_of_y=e.touches[0].clientY-canvas.offsetTop; 
       
       console.log("my touchstart");

    }

   
    canvas.addEventListener("touchmove", mytouchmove);
    function mytouchmove(e)
    {

        console.log("my touchmove");

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;


    }
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

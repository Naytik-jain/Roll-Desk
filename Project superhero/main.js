var canvas=new fabric.Canvas("MyCanvas")

player_x=10;
player_y=10;

block_height=30;
block_width=30;

player_object="";
block_image_object="";

function Player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}
function Block_update(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_width);
        block_image_object.scaleToHeight(block_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);

    });
}

window.addEventListener("keydown",myKeydown)

function myKeydown(e){
Keypressed=e.keyCode;
console.log(Keypressed);

if(e.shiftKey==true && Keypressed=='80'){
    console.log("P and Shift Pressed together");
    block_height=block_height+ 10;
    block_width=block_width+10;
    document.getElementById("Height").innerHTML=block_height;
    document.getElementById("Width").innerHTML=block_width;

}
if(e.shiftKey==true && Keypressed=='77'){
    console.log("M and Shift Pressed together");
    block_height=block_height- 10;
    document.getElementById("Height").innerHTML=block_height;
    document.getElementById("Width").innerHTML=block_width;

}
if(Keypressed=='70'){
    Block_update('ironman_face.png');
    console.log("f");
}

    if(Keypressed=='66'){
        Block_update('spiderman_body.png');
        console.log("b");
    }
    if(Keypressed=='76'){
        Block_update('hulk_legs.png');
        console.log("l");}
        if(Keypressed=='72'){
            Block_update('captain_america_left_hand.png');
            console.log("h");}
        }
        function up(){
            if(player_y>0){
                
                player_y=player_y-block_height;
                console.log("block image height=" + block_height);
                console.log("When up arrow pressed, X= "+ player_x +"y= "+ player_y);
                canvas.remove(player_object);
                Player_update();
        
            }
        }
        
        function down(){
            if(player_y<450){
                
                player_y=player_y+block_height;
                console.log("block image height=" + block_height);
                console.log("When up arrow pressed, X= "+ player_x +"y= "+ player_y);
                canvas.remove(player_object);
                Player_update();
                
            }
        }
        function right(){
            if(player_x<850){
                
                player_x=player_x+block_width;
                console.log("block image width=" + block_width);
                console.log("When up arrow pressed, X= "+ player_x +"y= "+ player_y);
                canvas.remove(player_object);
                Player_update();
                
            }
        }
        function left(){
            if(player_x>0){
                
                player_x=player_x-block_width;
                console.log("block image width= " + block_width);
                console.log("When up arrow pressed, X= "+ player_x +"y= "+ player_y);
                canvas.remove(player_object);
                Player_update();
                
            }
        }
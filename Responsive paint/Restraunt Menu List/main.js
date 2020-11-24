  var Dishes=["Sandwich","Pizza","Pasta" ];


  window.addEventListener("keydown", Mykeydown);




function show(){
    document.getElementById("contents").innerHTML=Dishes;
}
function AddItem(){
    
    var New_Item=document.getElementById("Item").value;
   Dishes.push(New_Item);
   Dishes.join(",")
   Dishes.sort();
    document.getElementById("contents").innerHTML=Dishes;


}


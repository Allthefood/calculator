function display(val){
 document.getElementById("textval").value+=val;
 }
function result(){
 let x;
 x = document.getElementById("textval").value;
 let y; 
 y = eval(x);
 document.getElementById("textval").value = y;
}
function clr(){
 document.getElementById("textval").value = "";
}
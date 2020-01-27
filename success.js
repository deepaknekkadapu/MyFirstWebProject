function hi(){
   document.getElementById("demo").style.color = "red";
}
function bye(){
    document.getElementById("demo").style.color= "rgb(28, 149, 230)";
}
function add(){
    var x = document.getElementById("firstno").value;
    var y = document.getElementById("secondno").value;
    x = parseInt(x);
    y = parseInt(y);
    z = x + y;
    document.getElementById("result").value = z;
}
function display(){
    document.getElementById("div1").style.display = "block";
}
function subtract(){
    var x = document.getElementById("firstno").value;
    var y = document.getElementById("secondno").value;
    x = parseInt(x);
    y = parseInt(y);
    z = x - y;
    document.getElementById("result").value = z;
}
function multiply(){
    var x = document.getElementById("firstno").value;
    var y = document.getElementById("secondno").value;
    x = parseInt(x);
    y = parseInt(y);
    z = x * y;
    document.getElementById("result").value = z; 
}
function div(){
    var x = document.getElementById("firstno").value;
    var y = document.getElementById("secondno").value;
    x = parseInt(x);
    y = parseInt(y);
    z = x / y;
    document.getElementById("result").value = z;
}
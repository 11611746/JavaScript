var a = [1,2,3,6,9,8,7,4];
var b = [];

function runfun(){
  for(var i=0;i<a.length-1;i++){
        b[i+1]=a[i];
    }
  b[0]=a[a.length-1];
  for(var i=0;i<a.length;i++){
    a[i]=b[i];
    console.log(b[i]+"<br>");
    }
  document.getElementById("btn1").innerHTML = b[0];
  document.getElementById("btn2").innerHTML = b[1];
  document.getElementById("btn3").innerHTML = b[2];
  document.getElementById("btn6").innerHTML = b[3];
  document.getElementById("btn9").innerHTML = b[4];
  document.getElementById("btn8").innerHTML = b[5];
  document.getElementById("btn7").innerHTML = b[6];
  document.getElementById("btn4").innerHTML = b[7];
  }
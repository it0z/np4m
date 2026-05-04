function testExtF(){
  document.title = "ext js test.";
}

function clock1(){
  
const now = new Date();

const h = now.getHours();
const m = now.getMinutes();
const s = now.getSeconds();
  
/*
const h = String(now.getHours()).padStart(2,0);
const m = String(now.getMinutes()).padStart(2,0);
const s = String(now.getSeconds()).padStart(2,0);
*/
  
document.getElementById('clock1').innerHTML = h + ":" + m + ":" + s;
  
}

setInterval(clock1, 1000);
clock1();

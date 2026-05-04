function testExtF(){
  document.title = "ext js test.";
}

function clock1(){
  
  const now = new Date();
  
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const strHours = hours < 10 ? '0' + hours : hours;
  const strMinutes = minutes < 10 ? '0' + minutes : minutes;
  const strSeconds = seconds < 10 ? '0' + seconds : seconds;
  
  document.getElementById('clock1').innerHTML = `${strHours}:${strMinutes}:${strSeconds}`;   
}

setInterval(clock1, 1000);
clock1();

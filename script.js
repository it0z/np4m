function testExtF(){
  document.title = "Our Pets 🐦";
}

function clock1(){
  
  const now = new Date();
  
  let h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  
  // Convert to 12-hour format
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  h = h ? h : 12; // Handle midnight (0) as 12
  
  // Add leading zeros
  const formattedH = h < 10 ? '0' + h : h;
  const formattedM = m < 10 ? '0' + m : m;
  const formattedS = s < 10 ? '0' + s : s;
  
  // Update the display
  document.getElementById('clock1').innerHTML = formattedH + ":" + formattedM + ":" + formattedS + " " + ampm;
}

setInterval(clock1, 1000);
clock1();

// --------------------------------------------------------------------------- Dropdown Code from w3s
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownF(x) {
  document.getElementById("dd1").classList.remove("show");
  document.getElementById("dd2").classList.remove("show");
  document.getElementById(x).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function testExtF(){
  document.title = "Our Pets";
}


const favLink = document.createElement('link');
favLink.rel = 'icon';
favLink.href = 'redBird.png';
document.head.appendChild(favLink);


const custCursor = document.createElement('link');
custCursor.rel = 'stylesheet';
custCursor.href = 'https://cdn.cursors-4u.net/cursors/animated/cool-pink-pointer-glitter-3488f1ab-32.css';
document.head.appendChild(custCursor);


const topBannerHTML = `
	<div class="dropdown" onclick="dropdownF('dd1')">
		JellyNeo Links
		<div id="dd1" class="dropdown-content">

			<a href="https://www.jellyneo.net/?go=the_void_within&id=essence_collection" target="_blank">Void Essence</a>
			<a href="https://items.jellyneo.net/mywishes/modojn/402315/" target="_blank">Codestones</a>
			<a href="https://items.jellyneo.net/mywishes/modojn/404181/" target="_blank">Nerkmids</a>
			<a href="https://items.jellyneo.net/mywishes/modojn/402320/" target="_blank">Neopet PBs</a>
			<a href="https://items.jellyneo.net/mywishes/modojn/498429/" target="_blank">Petpet PBs</a>

  		</div>
	</div>
	<div class="dropdown" onclick="dropdownF('dd2')">
		Other Links
		<div id="dd2" class="dropdown-content">

			<a href="https://v.angelcam.com/iframe?v=16lbkvzpl4&autoplay=1" target="_blank">Mama Angel</a>
			<a href="https://impress-2020.openneo.net/" target="_blank" title="Opens Dress to Impress in a new tab ⤴">Dress to Impress</a>
			<a href="testpage.html" title="#">Test Page</a>
			<a href="resources.html" title="#">Resources</a>
			<a href="bd.html" title="#">BD Corner</a>
			<a href="stones.html" title="#">Codestone Tool</a>

  		</div>
	</div>
	<div class="dropdown" onclick="dropdownF('dd3')">
		Neopets Dailies
		<div id="dd3" class="dropdown-content">

			<a href="https://www.neopets.com/halloween/haunted_woods_hunt.phtml" target="_blank">Haunted Woods Hunt</a>
			<a href="https://www.neopets.com/trudys_surprise.phtml" target="_blank">Trudy's Surprise</a>
			<a href="https://www.neopets.com/premium/wheel.phtml" target="_blank">The Wheel of Starlight!</a>
			<a href="https://www.neopets.com/medieval/earthfaerie.phtml" target="_blank">Illusen's Glade</a>		
			<a href="https://www.neopets.com/faerieland/employ/employment.phtml" target="_blank">Faerieland Employment Agency</a>		
			<a href="https://www.neopets.com/games/lottery.phtml" target="_blank">Neopian Lottery</a>    

  		</div>
	</div>
	<div class="dropdown" onclick="dropdownF('dd4')">
		Testing Area
		<div id="dd4" class="dropdown-content">

			<a href="db.html">Leave a Comment</a> 
			<a href="food.html">Food Archive</a>      

  		</div>
	</div>
`;

document.getElementById('topBanner').insertAdjacentHTML('beforeend', topBannerHTML);

const siteLogoJS = '<a href="index.html">Our Pets </a><img src="icons/redBird.png">';
document.getElementById('siteLogo').insertAdjacentHTML('beforeend', siteLogoJS);


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
  document.getElementById("dd3").classList.remove("show");
  document.getElementById("dd4").classList.remove("show");
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

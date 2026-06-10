function testExtF(){
  document.title = "Our Pets";
}


const favLink = document.createElement('link');
favLink.rel = 'icon';
favLink.href = 'icons/redBird.png';
document.head.appendChild(favLink);

const custCursor = document.createElement('link');
custCursor.rel = 'stylesheet';
// custCursor.href = 'https://cdn.cursors-4u.net/cursors/animated/rainbow-sheep-c58d4e1a-50.css';
if(localStorage.getItem("currCursor")){
  let curse = localStorage.getItem("currCursor");
  custCursor.href = curse;
}else{
  custCursor.href = 'https://cdn.cursors-4u.net/cursors/animated/cool-pink-pointer-glitter-3488f1ab-32.css';
}

if(window.location.pathname.split('/').pop() == "table1.html"){
  custCursor.href = 'https://cdn.cursors-4u.net/cursors/animated/paper-airplane-19477b19-32.css';
}
// alert(window.location.pathname.split('/').pop() );

if(window.location.pathname.split('/').pop() == "mangel.html"){
  custCursor.href = 'https://cdn.cursors-4u.net/cursors/animated/neopets-baby-pteri-010d6889-40.css';
}

if(window.location.pathname.split('/').pop() == "food.html"){
  custCursor.href = 'https://cdn.cursors-4u.net/cursors/animated/happy-apple-52507de0-32.css';
}



document.head.appendChild(custCursor);

let ccn = 0;
const cursorArray = [
  'https://cdn.cursors-4u.net/cursors/animated/cool-pink-pointer-glitter-3488f1ab-32.css',
  'https://cdn.cursors-4u.net/cursors/animated/slapping-cat-1348ecde-128.css',
  'https://cdn.cursors-4u.net/cursors/animated/arrow-825426cd-63.css',
  'https://cdn.cursors-4u.net/cursors/animated/cat-paw-curl-f8836eeb-128.css',
  'https://cdn.cursors-4u.net/cursors/animated/happy-cinnamoroll-eea44ff2-128.css',
  'https://cdn.cursors-4u.net/cursors/animated/rainbow-sheep-c58d4e1a-50.css'
];

function changeCursor(){
  ccn = (ccn + 1) % cursorArray.length;
  custCursor.href = cursorArray[ccn];
  if (!custCursor.isConnected) document.head.appendChild(custCursor);
  localStorage.setItem("currCursor", String(cursorArray[ccn])); // cursor should now stay current across all pages now.
  console.log("cursor updated!");

}

document.addEventListener('keydown', (e) => {
  if (e.shiftKey && e.key.toLowerCase() === 'c') {
    if (['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) return;
    changeCursor();
  }
});

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

			<a href="https://v.angelcam.com/iframe?v=16lbkvzpl4&autoplay=1" target="_blank">Mama Angel Cam</a>
      <a href="mangel.html">Mama Angel Photos</a>
			
      <a href="food.html">Chef's Corner</a> 

			<a href="resources.html">Online Resources</a>
			<a href="bd.html">BD Corner</a>
      <a href="https://impress-2020.openneo.net/" target="_blank" title="Opens Dress to Impress in a new tab ⤴">Dress to Impress</a>
			

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

			<a href="db.html">Message Board</a> 
			<a href="stones.html">Codestone Tool</a>

  		</div>
	</div>
`;

document.getElementById('topBanner').insertAdjacentHTML('beforeend', topBannerHTML);

const siteLogoJS = '<a href="index.html">Our Pets </a><img src="icons/redBird.png">';
document.getElementById('siteLogo').insertAdjacentHTML('beforeend', siteLogoJS);




// larger pet img preloading

const pet_urls1 = [
  'https://pets.neopets.com/cpn/Ardeillia/1/7.png',
  'https://pets.neopets.com/cpn/Bakkunawa/1/7.png',
  'https://pets.neopets.com/cpn/kambeign/1/7.png',
  'https://pets.neopets.com/cpn/Kiwikiti/1/7.png',
  'https://pets.neopets.com/cpn/Lassooo/1/7.png',
  'https://pets.neopets.com/cpn/Leichara/1/7.png',
  'https://pets.neopets.com/cpn/Lilkeeree/1/7.png',
  'https://pets.neopets.com/cpn/Mei_Tsaa/1/7.png',
  'https://pets.neopets.com/cpn/Pshyanna/1/7.png',
  'https://pets.neopets.com/cpn/Raikujo/1/7.png',
  'https://pets.neopets.com/cpn/Rerro_Ferro/1/7.png',
  'https://pets.neopets.com/cpn/Santaye/1/7.png',
  'https://pets.neopets.com/cpn/Vandiniii/1/7.png',
  'https://pets.neopets.com/cpn/abyssik/1/7.png',
  'https://pets.neopets.com/cpn/akibonn/1/7.png',
  'https://pets.neopets.com/cpn/Birinci/1/7.png',
  'https://pets.neopets.com/cpn/Caerbanogi/1/7.png',
  'https://pets.neopets.com/cpn/Erikor/1/7.png',
  'https://pets.neopets.com/cpn/Fissionfang/1/7.png',
  'https://pets.neopets.com/cpn/Hellaqwent/1/7.png',
  'https://pets.neopets.com/cpn/Hitogamii/1/7.png',
  'https://pets.neopets.com/cpn/Izklaidet/1/7.png',
  'https://pets.neopets.com/cpn/Kenquru/1/7.png',
  'https://pets.neopets.com/cpn/Kuikorosaur/1/7.png',
  'https://pets.neopets.com/cpn/Obocodo/1/7.png',
  'https://pets.neopets.com/cpn/Quayahroh/1/7.png',
  'https://pets.neopets.com/cpn/Stalfoh/1/7.png',
  'https://pets.neopets.com/cpn/takoyakae/1/7.png',
  'https://pets.neopets.com/cpn/Uwushi/1/7.png',
  'https://pets.neopets.com/cpn/Wrathorin/1/7.png',
  'https://pets.neopets.com/cpn/zenidos/1/7.png',
  'https://pets.neopets.com/cpn/zimgorigaz/1/7.png',
  'https://pets.neopets.com/cpn/Zotomxi/1/7.png'
];

pet_urls1.forEach(src => {
  const img = new Image();
  img.src = src;
});


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
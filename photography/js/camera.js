let dc = document.querySelector("#diycamera");
let h1Text = document.querySelector("h1");
let h2Text = document.querySelectorAll("h2"), i;
let h3Text = document.querySelectorAll("h3"), h;
let bcolor = document.querySelector(".pier1");
let h2Text2 = document.querySelector("#formonly2");
let bcolor2 = document.querySelector(".NB");
let check = document.querySelector("#check");


dc.addEventListener("click", dayNight);

//why does not all of the h2 and h3 work for this page
//why is the border color not changing 

console.log(dc);
function dayNight() {
	const curColor = window.getComputedStyle(document.body, null).getPropertyValue("background-color");
	console.log("the curr color is " + curColor);

	if (curColor == 'rgb(165, 165, 141)'){
		document.body.style.backgroundColor = '#0f170c';
		// for (i = 0; i < h1Text.length; i++){
		// 	h1Text.style.color = '#5c7d33';
		// }
		h1Text.style.color = '#5c7d33';
		for (i = 0; i < h2Text.length; i++){
			h2Text[i].style.color = '#d08c60';
		}
		// h2Text.style.color = '#d08c60';
		// h3Text.style.color = '#92b4a7';
		for (h = 0; h < h3Text.length; h++){
			h3Text[h].style.color = '#cdc776';
		}
		bcolor.style.borderColor = "#0f170c";
		bcolor2.style.borderColor = "#0f170c"
		h2Text2.style.color = '#262a10';
		check.style.color = 'white';
	}
	 else {
    	document.body.style.backgroundColor = 'rgb(165, 165, 141)';
    	h1Text.style.color = '#3a2618';
		for (i = 0; i < h2Text.length; i++){
			h2Text[i].style.color = '#262a10';
		}
		// h2Text.style.color = '#d08c60';
		// h3Text.style.color = '#92b4a7';
		for (h = 0; h < h3Text.length; h++){
			h3Text[h].style.color = '#1e2d2f';
		}
		bcolor.style.borderColor = 'rgb(165, 165, 141)';
		bcolor2.style.borderColor = 'rgb(165, 165, 141)';
		h2Text2.style.color = '#262a10';
		check.style.color = 'black';
 	 }
}

//changes with the time
let background = document.querySelector('body');
let hour = new Date().getHours();

// console.log(hour);
if (hour >= 18) {
  background.style.backgroundColor = '#0f170c';
  h1Text.style.color = '#5c7d33';
	for (i = 0; i < h2Text.length; i++){
		h2Text[i].style.color = '#d08c60';
	}
	// h2Text.style.color = '#d08c60';
	// h3Text.style.color = '#92b4a7';
	for (h = 0; h < h3Text.length; h++){
		h3Text[h].style.color = '#cdc776';
	}
	bcolor.style.borderColor = "#0f170c";
	bcolor2.style.borderColor = "#0f170c"
	h2Text2.style.color = '#262a10';
	check.style.color = 'white';
}
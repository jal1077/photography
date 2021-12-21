let dc = document.querySelector("#diycamera");
let h1Text = document.querySelector("#inspirational");
let h2Text = document.querySelectorAll("h2"), i;
let h2Text2 = document.querySelector("#formonly");
let check = document.querySelector("#check");
let fig = document.querySelectorAll("figcaption"), f;
// let check = document.querySelector("input[type=checkbox]")

dc.addEventListener("click", dayNight);

console.log(h2Text)
// console.log(dc);
function dayNight() {
	const curColor = window.getComputedStyle(document.body, null).getPropertyValue("background-color");
	console.log("the curr color is " + curColor);

	if (curColor == 'rgb(165, 165, 141)'){
		document.body.style.backgroundColor = '#0f170c';
		h1Text.style.color = '#5c7d33';
		for (i = 0; i < h2Text.length; i++){
			h2Text[i].style.color = '#8aaa79';
		}
		h2Text2.style.color = '#262a10';
		check.style.color = 'white';
		for (f = 0; f < fig.length; f++){
			fig[f].style.color = '#DDFBD2';
		}
	}
	 else {
    	document.body.style.backgroundColor = 'rgb(165, 165, 141)';
    	h1Text.style.color = '#3a2618';
    	for (i = 0; i < h2Text.length; i++){
			h2Text[i].style.color = '#262a10';
		}
		h2Text2.style.color = '#262a10';
		check.style.color = 'black';
		for (f = 0; f < fig.length; f++){
			fig[f].style.color = 'black';
		}
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
  		h2Text[i].style.color = '#8aaa79';
  	}
  	h2Text2.style.color = '#262a10';
  	check.style.color = 'white';
  	for (f = 0; f < fig.length; f++){
		fig[f].style.color = '#DDFBD2';
	}
}
let dc = document.querySelector("#diycamera");
let h1Text = document.querySelector("h1");
let check = document.querySelector("#check");
let fig = document.querySelectorAll("figcaption"), f;


dc.addEventListener("click", dayNight);


console.log(dc);
function dayNight() {
	const curColor = window.getComputedStyle(document.body, null).getPropertyValue("background-color");
	console.log("the curr color is " + curColor);

	if (curColor == 'rgb(165, 165, 141)'){
		document.body.style.backgroundColor = '#0f170c';
		h1Text.style.color = '#ffefd3';
		check.style.color = 'white';
		for (f = 0; f < fig.length; f++){
			fig[f].style.color = '#F8F4E3';
		}
	}
	 else {
    	document.body.style.backgroundColor = 'rgb(165, 165, 141)';
    	h1Text.style.color = '#3a2618';
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
  	h1Text.style.color = '#ffefd3';
 	 check.style.color = 'white';
  	for (f = 0; f < fig.length; f++){
		fig[f].style.color = '#F8F4E3';
	}
}

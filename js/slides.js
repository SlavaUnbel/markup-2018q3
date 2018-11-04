let slideIndex = 1; 

function showSlides(a) { 
	let dot = document.getElementsByClassName("nav-dot"); 
	let slide = document.getElementsByClassName("slider-container_slide"); 

	if(a > slide.length) { 
		slideIndex = 1; 
	} else if(a < 1) { 
		slideIndex = slide.length; 
	} 

	for(let i = 0; i < slide.length; i++) { 
		slide[i].style.display = "none"; 
	} 

	for(let i = 0; i < dot.length; i++) { 
		dot[i].className = dot[i].className.replace("active-dot", ""); 
	} 

	slide[slideIndex-1].style.display = "block"; 
	dot[slideIndex-1].className += " active-dot"; 
} 

showSlides(slideIndex); 

function func(a) { 
	showSlides(slideIndex = a); 
}


window.addEventListener("click", clickHandler);

var catchClick = false;
self.port.on("actionTriggert", 
	function(){
		catchClick = !catchClick;
		if(catchClick){
			document.body.style.cursor = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAvVBMVEUAAAD/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAP/AAMtBdPAAAAAPnRSTlMAAQIDBAUGCAoLDA0TFBgdICYnMTY8RUZJSktMW2ZpbXB/gI6RkpSbnqWoq62yubrAwcPIys/X2eLo7/H1/Yrbs7sAAACsSURBVBgZbcGLQoIwAAXQOyMzKgXRwh5qoVRmUakRFff/PyvaRmzDc9AmliQTtHSeWMnh6r7zzx0cxx+UzmA7LSgtYAt+qPiwRCWVOSzn1L49mALWLmBJqW1ge6PWhy2hMoNjQOlVoNGJH4t7xKxkh2j0PlmZwr+8HqJ2AmBLKQthyCdiRG0HwwO/SmoZDFds3MJwVPJfCNMNayvYUirPHhzRmuTLWGCPAwHHL6MwLt9Nrz0uAAAAAElFTkSuQmCC), auto';
		} else {
			document.body.style.cursor = 'auto';
		}
	}
);

function clickHandler (event) {
	if(catchClick == true){
		colorText(event.target);
		event.preventDefault();
		event.stopPropagination();
	}
}


function colorText(element){
	const textWidth = element.offsetWidth;
	const gradientWidth = textWidth * 1.75;
	
	const canvas=document.createElement("canvas");
	document.body.appendChild(canvas); 
	canvas.style.display = 'none';
	const canvasContext = canvas.getContext("2d");
	
	element.style.display = 'inline';
	var lines = element.getClientRects();

	canvas.style.width = textWidth * lines.length;
	canvas.width = textWidth * lines.length;
	
	//clear the canvas
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	
	//draw the correct color gradient on the cleaned canvas
	var y = 0;	
	var x = 0;					
	for (var i=0; i < lines.length; i++){
		var height = lines[i].bottom - lines[i].top;
		canvasContext.fillStyle=getGradient(canvasContext, x, x + gradientWidth);
		canvasContext.fillRect(x,y,gradientWidth,height);
		x += gradientWidth;
	} 
			
	//use the canvas as a background for the text
	var dataUrl = canvas.toDataURL();
	element.style.backgroundImage='url('+dataUrl+')'
	element.style.webkitBackgroundClip= 'text';
	element.style.webkitTextFillColor='transparent';

	document.body.removeChild(canvas);
}


function getGradient(canvasContext, offsetX, width){
	var grd=canvasContext.createLinearGradient(offsetX,0, width,0);
	grd.addColorStop(0.000,"red");
	grd.addColorStop(0.250,"green");
	grd.addColorStop(0.50,"blue");
	grd.addColorStop(0.750,"green");
	grd.addColorStop(1.000,"red");
	return grd;
}
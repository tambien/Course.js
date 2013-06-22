/*=============================================================================
	START HERE
=============================================================================*/
$(function(){
	console.log("here we go...");
	setup();
	loop();
})

/*=============================================================================
	GLOBAL VARS
=============================================================================*/

var context;
var width, height;

/*=============================================================================
	CANVAS AND CONTEXT
=============================================================================*/

function setupCanvas(){
	context = $("#boilerCanvas")[0].getContext("2d");
	sizeCanvas();
}

function sizeCanvas(){
	context.canvas.width = width;
	context.canvas.height = height;
}

/*=============================================================================
	EVENT BINDING
=============================================================================*/

//bind all the relevant events
function bindEvents(){
	$(window).bind("resize", resize);
	$(window).bind("mousedown", mousePressed);
	$(window).bind("mouseup", mouseReleased);
	$(window).bind("mousemove", mouseMoved);
}

function resize(){
	width = $(window).width();
	height = $(window).height();
	sizeCanvas();
}

//MOUSE STUFFS

function mousePressed(event){
	event.preventDefault();
	var mouseX = event.pageX;
	var mouseY = event.pageY;
}

function mouseReleased(event){
	event.preventDefault();
	var mouseX = event.pageX;
	var mouseY = event.pageY;
}

function mouseMoved(event){
	event.preventDefault();
	var mouseX = event.pageX;
	var mouseY = event.pageY;
}

/*=============================================================================
	SETUP AND LOOP
=============================================================================*/

function setup(){
	//setup the sizes initially
	width = $(window).width();
	height = $(window).height();
	//setup the canvas
	setupCanvas();
	//bind all the events
	bindEvents();
}

function loop(){
	//calls loop on the next animation frame (about 60fps)
	requestAnimationFrame(loop);
	//makeSquare();
}

function makeSquare(){
	var x = Math.random()*width;
	var y = Math.random()*height;
	context.beginPath();
	context.rect(x, y, 100, 100);
	context.fillStyle = 'yellow';
	context.fill();
	context.lineWidth = 7;
	context.strokeStyle = 'black';
	context.stroke();
}
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
}

function resize(){
	width = $(window).width();
	height = $(window).height();
	sizeCanvas();
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
}

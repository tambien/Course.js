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
var mouseX, mouseY;

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
	$(window).bind("mousemove", mouseMoved);
}

function resize(event){
	width = $(window).width();
	height = $(window).height();
	sizeCanvas();
}

function mouseMoved(event){
	mouseX = event.pageX;
	mouseY = event.pageY;
}

/*=============================================================================
	SETUP AND LOOP
=============================================================================*/

var squares = [];

function setup(){
	//setup the sizes initially
	width = $(window).width();
	height = $(window).height();
	//setup the canvas
	setupCanvas();
	//bind all the events
	bindEvents();
	for (var i = 0 ; i < 20; i++){
		var randX = RANDOM.getInt(width);
		var randY = RANDOM.getInt(height);
		var randSize = RANDOM.getInt(20, 500);
		var s = new Square(randX, randY, randSize);
		squares.push(s);
	}
}

function loop(){
	//calls loop on the next animation frame (about 60fps)
	requestAnimationFrame(loop);
	context.clearRect(0, 0, width, height);
	for (var i = 0; i < squares.length; i++){
		var s = squares[i];
		s.update();
	}
}
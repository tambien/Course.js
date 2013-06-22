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
	context.clearRect(0, 0, width, height);
	//drawRandomArc();
	//drawRandomLine();
	//drawRandomRect();
	drawRandomCurve();
}

function drawRandomRect(){
	//everything start with begin path
	context.beginPath();
	//get a random x and y the size of the screen
	var randX = RANDOM.getInt(0, width);
	var randY = RANDOM.getInt(0, height);
	var randOpacity = RANDOM.getFloat();
	var randSize = RANDOM.getInt(20, 500);
	//draw the rectange at that random x and y
	context.rect(randX, randY, randSize, randSize);
	//set the color to be blue with 50% opacity
	context.fillStyle = "rgba(0, 0, 255, "+randOpacity+")";
	//fill / close the path
	context.fill();
	context.lineWidth = 10;
	context.strokeStyle = "black";
	context.stroke();
}

function drawRandomLine(){
	//everything start with begin path
	context.beginPath();
	//pick a random start position
	var startingX = RANDOM.getInt(0, width);
	var startingY = RANDOM.getInt(0, height);
	context.moveTo(startingX, startingY);
	//put 20 segments in the line
	for (var i = 0; i < 20; i++){
		//get a random x and y the size of the screen
		var randX = RANDOM.getInt(0, width);
		var randY = RANDOM.getInt(0, height);
		context.lineTo(randX, randY);
	}
	var randOpacity = RANDOM.getFloat();
	context.lineWidth = 1;
	context.strokeStyle = "rgba(0, 0, 255, " + randOpacity + ")"; 
	context.stroke();
}

function drawRandomArc(){
	//everything start with begin path
	context.beginPath();
	//pick a random start position
	var startingX = RANDOM.getInt(0, width);
	var startingY = RANDOM.getInt(0, height);
	//pick a random radius
	var randRadius = RANDOM.getInt(10, 200);
	var randomStartAngle = RANDOM.getFloat(0, Math.PI);
	var randomEndAngle = RANDOM.getFloat(0, Math.PI);
	//draw the arc
	context.moveTo(startingX, startingY);
	context.arc(startingX, startingY, randRadius, randomStartAngle, randomEndAngle, true);
	var randOpacity = RANDOM.getFloat();
	context.fillStyle = "rgba(0, 0, 255, "+randOpacity+")";
	//fill / close the path
	context.fill();
}


function drawRandomCurve(){
	//everything start with begin path
	context.beginPath();
	//pick a random start position
	var startingX = RANDOM.getInt(0, width);
	var startingY = RANDOM.getInt(0, height);
	context.moveTo(startingX, startingY);
	//put 20 segments in the line
	for (var i = 0; i < 20; i++){
		//get a random x and y the size of the screen
		var randX = RANDOM.getInt(0, width);
		var randY = RANDOM.getInt(0, height);
		var randControlX = RANDOM.getInt(0, width);
		var randControlY = RANDOM.getInt(0, height);
		context.quadraticCurveTo(randX, randY, randControlX, randControlY);
	}
	var randOpacity = RANDOM.getFloat();
	context.lineWidth = 4;
	context.strokeStyle = "rgba(0, 0, 255, " + randOpacity + ")"; 
	context.stroke();
}

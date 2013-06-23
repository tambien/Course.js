/*=============================================================================
	START HERE
=============================================================================*/
$(function(){
	console.log("singleton");
	SINGLETON.initialize();
})


var SINGLETON = (function(){

	//local vars
	var width, height;

	var privatePixels = [];

	function init(){
		width = $(window).width();
		height = $(window).height();
		makePixels();
		setupCanvas();
		bindEvents();
		loop();
	}

	function setupCanvas(){
		context = $("#boilerCanvas")[0].getContext("2d");
		sizeCanvas();
	}

	function sizeCanvas(){
		context.canvas.width = width;
		context.canvas.height = height;
	}

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

	function makePixels(){
		var pixelSize = 50;
		for (var i = 0; i < width; i+=pixelSize){
			for (var j = 0 ; j < height; j+=pixelSize){
				var p = new SINGLETON.Pixel(i, j, pixelSize);
				privatePixels.push(p);
			}
		}
	}

	function loop(){
		context.clearRect(0, 0, width, height)
		requestAnimationFrame(loop);
		for (var i = 0; i < privatePixels.length; i++){
			var p = privatePixels[i];
			p.randomGray();
			p.draw(context);
		}
	}

	//API//
	return {
		initialize : init,
	}
}());




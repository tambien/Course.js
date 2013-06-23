SINGLETON.Pixel = function(x, y, size){

	//private variable gray
	var gray = RANDOM.getFloat();	

	//publically accessible method
	this.randomGray = function(){
		gray = RANDOM.getFloat();
	}

	//publically accessible method
	this.draw =  function(context){
		privateDraw(context);
	}

	//private method
	function privateDraw(context){
		context.beginPath();
		context.rect(x, y, size, size);
		context.fillStyle = "rgba(0, 0, 0, " + gray + ")";
		context.fill();	
	}
}
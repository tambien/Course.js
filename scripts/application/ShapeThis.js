var Shape = function(){
	this.x = -1;
	this.y = -1;

	this.color = {
		r : 0,
		b : 255,
		g : 0
		
	}

	this.name = "shape";

	this.move = function(x, y){
		this.x = x;
		this.y = y;
	}
}
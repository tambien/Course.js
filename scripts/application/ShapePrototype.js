var Shape = function(){
	this.x = -1;
	this.y = -1;

	this.color = {
		r : 0,
		b : 255,
		g : 0
		
	}
}

Shape.prototype.name = "shape";

Shape.prototype.move = function(x, y){
	this.x = x;
	this.y = y;
}
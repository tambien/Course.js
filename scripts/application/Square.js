var Square  = function(x, y, size){
	this.currentX = x;
	this.currentY = y;
	this.startY = y;
	this.startX = x;
	this.targetX = x;
	this.targetY = y;
	this.size = size;
	this.frameCount = 0;
}

Square.prototype.color = "#ff0000";

Square.prototype.draw = function(){
	context.beginPath();
	context.fillStyle = this.color;
	context.fillRect(this.currentX, this.currentY, this.size, this.size);
}

Square.prototype.move = function(){
	this.startX = this.currentX;
	this.startY = this.currentY;
	this.targetX = RANDOM.getInt(width);
	this.targetY = RANDOM.getInt(height);
}

Square.prototype.updatePosition = function(){
	this.currentX = INTERPOLATE.linear(this.frameCount, 0, 100, this.startX, this.targetX);
	this.currentY = INTERPOLATE.linear(this.frameCount, 0, 100, this.startY, this.targetY);
}

Square.prototype.update = function(){
	this.updatePosition();
	this.draw();
	this.frameCount++;
	if (this.frameCount === 100){
		this.move();
		this.frameCount = 0;
	}
}
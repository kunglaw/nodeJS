"use strict";

class Square{
	
	constructor(side)
	{
		this.side = side;
	}
	
	get area()
	{
		return this.calcArea();
	}
	
	calcArea()
	{
		return this.side * this.side;
	}

}

exports.default = Square;
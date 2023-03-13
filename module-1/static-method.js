class Square {

	constructor (_width) {
		this.width  = _width;
		this.height = _width;
	}


	static equals (a, b) {
		return a.width * b.height === a.height * b.width;
	}

	static isValidDimension(width, height) {
		return width === height;
	}

}

let square1 = new Square(2);
let square2 = new Square(6);

console.log(Square.isValidDimension(7, 6));


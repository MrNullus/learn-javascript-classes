// Getters and Setters

class Square {
	constructor (_width) {
		this.width  = _width;
		this.height = _width;
	}

	get area () {
		return this.width * this.width;
	}

	set area (area) {
		this.width  = Math.sqrt(area);
		this.height =  this.width;
	}
}

let square1 = new Square(23);
console.log(square1.width, "  X  ", square1.height);

// ao ser instanciado o getter não é necessario os parênteses
// ¬ usa-se como um atributo
console.lo("AREA ====> ", square1.area);
console.log(square1.width, "  X  ", square1.height);

// deve ser modificado como se fosse um atributo
square1.area = 12;

console.lo("AREA ====> ", square1.area);
console.log(square1.width, "  X  ", square1.height);

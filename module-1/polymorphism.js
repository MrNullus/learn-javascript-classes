class Animal {
	constructor(_name, _age, _type) {
		this.name = _name;
		this.age  = _age;
	}

	makeSound() {
		console.log("Generic Sound ~_~");
	}
}

class Dog extends {
	constructor(_name, _age, _type) {
		super(_name, _age, _type);
		this.type = _type;
	}

	makeSound() {
		console.log("Au Au Au");
	}
}

const doguinho = new Dog("Caramelo", 12, "Viralata");

doguinho.makeSound();

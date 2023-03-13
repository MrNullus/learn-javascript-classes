// CLasse Pai ou Super-Classe e Classe Filha
class Person {

	constructor(_name, _age) {
		this.name = _name;
		this.age  = _age; 
	}


	describe() {
		console.log(`I am ${this.name} and I am ${this.age}`)
	}

}


class Programmer extends Person {

	constructor (_name, _age, _yearsOfExperience) {
		super(_name, _age);

		this.yearsOfExperience = _yearsOfExperience;
	}

	code() {
		console.log(`${this.name} is coding :P`);
	}

}


let person1 = new Person('Subaru', 21);
let programmer1 = new Programmer('Jeffinho', 999, '999');
programmer1.code()


const programmers = [
	new Programmer('Doreto', 23),
	new Programmer('Lasara', 19)
];

function developSoftware(programmers) {
	programmers.foreach(( programmer )=> programmer.code());
}

developSoftware(programmers);


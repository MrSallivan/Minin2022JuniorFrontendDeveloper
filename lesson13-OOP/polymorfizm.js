//это одно действие и несколько реализаций

class Animal{
	constructor(name){
		this.name = name
	}

	makeSound(){}
}

class Dog extends Animal {
	constructor(name){
		super(name)
	}

	makeSound(){
		console.log(`Гав Гав, говорит ${this.name}`);
	}
}
class Horse extends Animal {
	constructor(name){
		super(name)
	}

	makeSound(){
		console.log(`Иго-го, говорит ${this.name}`);
	}
}

const dog = new Dog('Druzgok')
console.log(dog.makeSound())
const horse = new Horse('Strelka')
console.log(horse.makeSound())
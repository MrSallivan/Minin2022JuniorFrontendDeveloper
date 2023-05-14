//!в статическом поле не может быть this! Если он есть поле нужно делать обычным.


class Car {
	static isCar(car) {
		return console.log(car instanceof Car)
	}

	static #initialParams = {
		name: 'Audi',
		maxSpeed: '150'
	}

	constructor(name, maxSpeed) {
		this.name = name || Car.#initialParams.name
		this.maxSpeed = maxSpeed || Car.#initialParams.maxSpeed
	}
	drive() {
		console.log(`Машина ${this.name} сейчас в пути.`);
	}
}

const car = new Car('BMW', 200)
console.log(car);
Car.isCar(car) // вывод статического метода
const animal = {}
Car.isCar(animal)
// car.isCar(animal) -- ОШИБКА

const car2 = new Car()
console.log(car2);


//? console.log(Car.initialParams) --- undefined
//!? console.log(Car.#initialParams) --- ERROR
class Plane {
	constructor(type, numberOfPassengers) {
		this.type = type
		this.numberOfPassengers = numberOfPassengers
	}
	startFlight() {
		console.log(`Go Fly`)
	}

}

class MilitaryPlane extends Plane {
	constructor(type) {
		super(type, 0)
		this.numberOfGuns = 0
	}
	startFlight() {
		console.log(`Go Fly to attack!`)
	}
	setNumberOfGuns(number) {
		this.numberOfGuns = number
	}
	shoot() {
		console.log(`Shoots!!`);
	}
}

const plane = new Plane('Passenger', 100)
console.log(plane);
plane.startFlight()

const milPlane = new MilitaryPlane('military')
console.log(milPlane);
milPlane.setNumberOfGuns(15)
console.log(milPlane);
milPlane.shoot()

//instanceof проверяет принадлежит ли объект определенному классу

console.log(milPlane instanceof MilitaryPlane);
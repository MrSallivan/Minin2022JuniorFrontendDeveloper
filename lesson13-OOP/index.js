// function Animal(name) {
// 	this.name = name
// 	this.getName = function () {
// 		return this.name
// 	}
// }

class Animal {
	constructor(name) {
		this.name = name
	}
	getName() {
		return this.name
	}

}

const cat = new Animal('Cat')
const dog = new Animal('Dog')

console.log(cat);

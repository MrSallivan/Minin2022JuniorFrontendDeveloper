//this - object

console.log(this);

const user = {
	name: 'Maxim',
	dayOfBirth: 2001,
	getName() {
		return this.name
	},
	calckAge() {
		const current = new Date().getFullYear()
		return (current - this.dayOfBirth)
	},
	getAllInfo: function () {
		const age = this.calckAge()
		console.log(`Name ${this.name}, Age ${age}`);
	}
}
const user2 = {
	name: 'Alex',
	dayOfBirth: 2004,
	calckAge() {
		const current = new Date().getFullYear()
		return (current - this.dayOfBirth)
	},
}

console.log(user.getName())
console.log(user.calckAge())
user.getAllInfo()

//bind, call, aply - для привязки контекста функции
// CALL - немедленный вызов привязанного контекста

user.getAllInfo.call(user2)

//BIND 


//Абстракция - это использование только тех характеристик объекта, которые с наибольшей точностью представляют его в какой то определенной системе.

class Footballer{
	constructor(name, club){
		this.name = name
		this.club = club
	}
	shoot(){}
	celebrateGoal(){}
	pass(){}
} 

class Forvard extends Footballer{
	constructor(name, club){
		super(name, club)
	}
	shoot() { 
		console.log('Очень сильный удар');
	}
	celebrateGoal() {
		console.log('Да, я забил гол!!');
	}
	pass() { 
		console.log('Средненький пас');
	}
}
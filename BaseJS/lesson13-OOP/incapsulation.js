//Поля и методы могут быть публичными и приватными(#) - нету доступа через точку и нет доступа в дочерних классах. Есть доступ только внутри родительского класса.
//Чтобы получить значения приватных полей используют GET и SET/


class Developer {
	#salary
	constructor(name, programmingLanguage) {
		this.name = name
		this.programmingLanguage = programmingLanguage
		this.#salary = 3000
	}
	startCoding() {
		console.log(`${this.name} начинает писать код. Его зарплата ${this.#salary} $`);
		this.#printProgramingLanguage()
	}
	#printProgramingLanguage() {
		console.log(`Язык программирования: ${this.programmingLanguage}`);
	}
	get devSalary(){
		return this.#salary
	}
	set setSalary(num){
		this.#salary = num
	}
}

const developer = new Developer('Maksim', 'JavaScript')
console.log(developer);
console.log(developer.name);
console.log(developer.programmingLanguage);
console.log(developer.startCoding());

class JuniorDeveloper extends Developer {
	constructor(name, programmingLanguage) {
		super(name, programmingLanguage)
	}
}

const juniorDeveloper = new JuniorDeveloper('Igor', 'Pyton')
console.log(juniorDeveloper.startCoding());
console.log(juniorDeveloper.salary);//undefined
// console.log(juniorDeveloper.printProgramingLanguage()); --error
console.log(developer.salary); //с salary можем работать внутри класса Developer
console.log(developer.startCoding());
console.log(juniorDeveloper.devSalary); //вывод Salary через GET
juniorDeveloper.setSalary = 5000; //устанавливает Salary через SET
console.log(juniorDeveloper.devSalary); //вывод Salary через GET































































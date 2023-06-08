const man = {
	name: 'Maksim',
	programmingLanguage: 'JavaScript',
	getName() {
		return this.name
	},
	getProgLang() {
		console.log(this);
		return this.programmingLanguage
	}
}
const newGetName = man.getName

console.log(newGetName.call(man));
console.log(man.getName());

console.log(man.getProgLang());

//У стрелочных функций нет своего контекста this!!!!

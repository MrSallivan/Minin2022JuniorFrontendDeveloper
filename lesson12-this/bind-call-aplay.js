function printHeroInfo(textInfo = 'null') {
	console.log(`Name: ${this.fullName}, Health: ${this.health}, strength: ${this.strength}, text-info: ${textInfo}`);
}

const mainHero = {
	fullName: 'SpiderMan',
	health: 65,
	strength: 5,
}
const badHero = {
	fullName: 'Joker',
	health: 55,
	strength: 10,
}

printHeroInfo()
printHeroInfo.call(badHero, 'Bad role hero') // параметры передаются через запятую
printHeroInfo.apply(badHero, []) // параметры передаются как массив

const bindedPrintHero = printHeroInfo.bind(mainHero, 'Good role hero') // параметры передаются через запятую, bind не вызывает функцию, а создает новую функцию с новым контекстом
bindedPrintHero()
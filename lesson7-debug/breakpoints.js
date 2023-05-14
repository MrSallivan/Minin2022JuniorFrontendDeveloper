const developerName = 'Maxim'
const programmingLanguage = 'JavaScript'

const prgLang = {
	javaScript: 'JavaScript',
	nodeJS: 'NodeJS'
}
debugger

if (programmingLanguage === prgLang.javaScript) {
	console.log(`${developerName} является Frontend разработчиком`)
} else if (programmingLanguage === prgLang.nodeJS) {
	console.log(`${developerName} является Back - end разработчиком`)
} else {
	console.log(`Язык прогораммирования у ${developerName} не определён`)
}
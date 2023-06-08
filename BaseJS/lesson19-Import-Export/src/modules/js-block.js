import jsPic from '../../assets/js.png'


export class JSBlock {
	#container
	constructor() {
		this.#container = document.createElement('div')
		this.#container.className = `js-block`
	}
	render() {
		const mainTitle = document.createElement('h1')
		mainTitle.className = `main-title`
		mainTitle.textContent = `Java Script`

		const JSImageHTML = document.createElement(`img`)
		JSImageHTML.className = `js-image`
		JSImageHTML.src = jsPic

		const foundedText = document.createElement(`p`)
		foundedText.textContent = `С момента создания JavaScript прошло:`
		foundedText.className = `founded-text`

		this.#container.append(mainTitle, JSImageHTML, foundedText)

		return this.#container
	}
}
class CustomSelector {
	#id
	#options
	#currentSelectedOption
	#ulContainer
	#selectButton

	static #defaultTextButton = {
		defaultTetx: 'Выберите элемент'
	}

	constructor(id, options = []) {
		this.#id = id
		this.#options = options
		this.#currentSelectedOption = null
		this.#selectButton = document.createElement('button')
		this.#ulContainer = document.createElement('ul')
	}

	get selectedValue() {
		return this.#currentSelectedOption
	}

	#renderVisibleSelect(container) { }
	#renderSelectButton(container) { }
	#handleDropdownToggle()
	#handleDropdownItemSelect(event) { }

	render(container) {
		const selectDropdownContainer = document.createElement('div')
		selectDropdownContainer.className = `select-dropdown select-dropdown--${this.#id}`
		if (container) {
			this.#renderSelectButton(selectDropdownContainer)
			this.#renderVisibleSelect(selectDropdownContainer)
			container.append(selectDropdownContainer)
		}
	}
}

const options = [
	{ value: 1, text: 'JavaScript' },
	{ value: 2, text: 'NodeJS' },
	{ value: 3, text: 'ReactJS' },
	{ value: 4, text: 'HTML' },
	{ value: 5, text: 'CSS' }
];
const customSelect = new CustomSelect('homeWork', options);
const mainContainer = document.querySelector('#container');
customSelect.render(mainContainer);
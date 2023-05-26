class CustomSelect {
	#id
	#options
	#currentSelectedOption
	#ulContainer
	#selectButton
	#body

	static #defaultTextButton = {
		defaultText: 'Выберите элемент'
	}

	constructor(id, options = []) {
		this.#id = id
		this.#options = options
		this.#currentSelectedOption = null
		this.#selectButton = document.createElement('button')
		this.#ulContainer = document.createElement('ul')
		this.#body = document.querySelector('body')
	}

	get selectedValue() {
		return this.#currentSelectedOption
	}

	#renderVisibleSelect(container) {
		this.#ulContainer.className = `select-dropdown__list select-dropdown__list--${this.#id}`

		this.#options.forEach((option) => {
			const liItemEl = document.createElement('li')
			liItemEl.className = `select-dropdown__list-item`
			liItemEl.dataset.value = option.value
			liItemEl.textContent = option.text
			liItemEl.addEventListener('click', this.#handleDropdownItemSelect.bind(this))
			this.#ulContainer.append(liItemEl)
		})
		if (container) {
			container.append(this.#ulContainer);
		}
	}

	#renderSelectButton(container) {
		this.#selectButton.className = `select-dropdown__button select-dropdown__button--${this.#id}`
		const spanInButton = document.createElement('span')
		spanInButton.className = `select-dropdown__text select-dropdown__text--${this.#id}`
		spanInButton.textContent = CustomSelect.#defaultTextButton.defaultText
		this.#selectButton.append(spanInButton)
		container.append(this.#selectButton)
		this.#selectButton.addEventListener(
			'click',
			this.#handleDropdownToggle.bind(this)
		)
	}

	#handleDropdownToggle(event) {
		event.stopPropagation()
		this.#ulContainer.classList.toggle('active')
	}

	#isClickOut() {
		this.#body.addEventListener('click', (event) => {
			const isUl = event.target.classList.contains('select-dropdown__list')
			const isbutton = event.target.classList.contains('select-dropdown__button')
			if (!isUl && !isbutton) {
				this.#ulContainer.classList.remove('active')
			}
		})
	}

	#handleDropdownItemSelect(event) {
		const { target } = event
		const value = target.dataset.value
		const targetOption = this.#options.find(option => option.value === Number(value))
		const buttonSpan = this.#selectButton.querySelector('.select-dropdown__text')

		if (value && targetOption && buttonSpan) {
			buttonSpan.textContent = `${targetOption.text}`

			const allLiEl = document.querySelectorAll('.select-dropdown__list-item')
			allLiEl.forEach(li => {
				li.classList.remove('selected')
			})
			target.classList.add('selected')
			this.#ulContainer.classList.remove('active')
		}
	}



	render(container) {
		const selectDropdownContainer = document.createElement('div')
		selectDropdownContainer.className = `select-dropdown select-dropdown--${this.#id}`
		if (container) {

			this.#renderSelectButton(selectDropdownContainer)
			this.#renderVisibleSelect(selectDropdownContainer)
			this.#isClickOut()
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
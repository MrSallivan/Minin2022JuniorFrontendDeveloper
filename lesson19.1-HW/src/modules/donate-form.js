export class DonateForm {
	#containerForm

	constructor() {
		this.#containerForm = document.createElement('form')
	}

	render() {
		this.#containerForm.className = `donate-form`
		const h1El = document.createElement(`h1`)
		h1El.id = `total-amount`
		h1El.textContent = `28$`
		const labelEl = document.createElement(`label`)
		labelEl.className = `donate-form__input-label`
		labelEl.textContent = `Введите сумму в $`
		const inputEl = document.createElement(`input`)
		inputEl.className = `donate-form__donate-input`
		inputEl.name = `amount`
		inputEl.type = `number`
		inputEl.max = `100`
		inputEl.min = `1`
		inputEl.required = ``
		const buttonEl = document.createElement(`button`)
		buttonEl.className = `donate-form__submit-button`
		buttonEl.type = `submite`
		buttonEl.textContent = `Задонатить`

		labelEl.append(inputEl)
		this.#containerForm.append(h1El, labelEl, buttonEl)

		return this.#containerForm
	}
}
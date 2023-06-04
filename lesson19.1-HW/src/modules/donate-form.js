export class DonateForm {
	#containerForm
	#minDonate
	#maxDonate
	#totalAmount

	static TextObject = {
		DonateButtonText: 'Задонатить',
		InputLabel: `Введите сумму в $`,
	}

	static DefaultDonateValues = {
		min: 1,
		max: 100,
	}

	constructor(totalAmount, minDonate, maxDonate) {
		this.#maxDonate = maxDonate || DonateForm.DefaultDonateValues.max;
		this.#minDonate = minDonate || DonateForm.DefaultDonateValues.min;
		this.#containerForm = document.createElement('form')
		this.#totalAmount = totalAmount
	}

	updateTotalAmount(newAmount){
		const h1El = document.querySelector('#total-amount')
		h1El.textContent = `${newAmount}$`

	}

	render() {
		this.#containerForm.className = `donate-form`
		const h1El = document.createElement(`h1`)
		h1El.id = `total-amount`
		h1El.textContent = `28$`
		const labelEl = document.createElement(`label`)
		labelEl.className = `donate-form__input-label`
		labelEl.textContent = DonateForm.TextObject.InputLabel
		const inputEl = document.createElement(`input`)
		inputEl.className = `donate-form__donate-input`
		inputEl.name = `amount`
		inputEl.type = `number`
		inputEl.max = this.#maxDonate
		inputEl.min = this.#minDonate
		inputEl.required = ``
		const buttonEl = document.createElement(`button`)
		buttonEl.className = `donate-form__submit-button`
		buttonEl.type = `submite`
		buttonEl.textContent = DonateForm.TextObject.DonateButtonText

		labelEl.append(inputEl)
		this.#containerForm.append(h1El, labelEl, buttonEl)

		return this.#containerForm
	}
}
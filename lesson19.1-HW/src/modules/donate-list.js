export class DonateList {
	#donates

	static textObject = {
		DonatesList: `Список донатов`
	}

	constructor(donates) {
		this.#donates = donates
	}

	render() {

		const donatesContainerEl = document.createElement(`div`)
		donatesContainerEl.className = `donates-container`
		donatesContainerEl.innerHTML = `
			<h2 class="donates-container__title">${DonateList.textObject.DonatesList}</h2>
			<div class="donates-container__donates">
			</div>
		`
		this.#donates.forEach(element => {
			const amount = element.amount
			const date = element.date
			const donate = `<div class="donate-item">${date} - <b>${amount}$</b></div>`
			donatesContainerEl.insertAdjacentHTML('beforeend', donate)
		});


		return donatesContainerEl

	}
}
import { DonateForm } from './donate-form'
import { DonateList } from './donate-list'
import { calculateSumOfNumbers, getFormattedTime } from "./../core/utils/index"


const mockDonates = [
	{ amount: 4, date: getFormattedTime(new Date()) },
	{ amount: 20, date: getFormattedTime(new Date()) },
	{ amount: 3, date: getFormattedTime(new Date()) },
	{ amount: 1, date: getFormattedTime(new Date()) },
	{ amount: 2, date: getFormattedTime(new Date()) },
]

export default class App {
	#donateForm
	#donateList
	#state

	constructor() {
		this.#state = { donates: mockDonates, totalAmount: 0 }
		this.#state.totalAmount = calculateSumOfNumbers(this.#state.donates.map((item)=> item.amount))
		this.#donateForm = new DonateForm(this.#state.totalAmount, this.#createNewDonate.bind(this))
		this.#donateList = new DonateList(this.#state.donates)
	}

	#createNewDonate(newDonate) {
		this.#state.donates.push(newDonate)
		this.#state.totalAmount += newDonate.amount
		this.#donateForm.updateTotalAmount(this.#state.totalAmount)
		this.#donateList.updateDonates(this.#state.donates)
		console.log(this.#state.donates);
	}
	
	run() {
		document.body.append(
			this.#donateForm.render(),
			this.#donateList.render()
		)
	}
}
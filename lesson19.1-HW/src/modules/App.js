import { DonateForm } from './donate-form'
import { DonateList } from './donate-list'



const mockDonates = [
	{ amount: 4, date: new Date() },
	{ amount: 20, date: new Date() },
	{ amount: 3, date: new Date() },
	{ amount: 1, date: new Date() },
]

export default class App {
	#donateForm
	#donateList

	constructor() {
		this.state = {donates: [], totalAmount: null}
		this.#donateForm = new DonateForm(this.state.totalAmount)
		this.#donateList = new DonateList(this.state.donates)
	}

	run() {


		document.body.append(this.#donateForm.render())
		document.body.append(this.#donateList.render())
	}
}
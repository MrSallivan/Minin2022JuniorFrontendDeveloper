// import {
// 	getTodayDateFormat,
// 	getDateDiferent
// } from '../core/utils/date'
import * as DateUtils from '../core/utils/date'


export class Timer {
	#date
	#timerContainer
	#timerTextHTML


	constructor(date) {
		this.#date = date
		this.#timerContainer = document.createElement('div')
		this.#timerTextHTML = document.createElement('h2')
	}

	#getTimerContent() {
		return DateUtils.getDateDiferent(new Date(), this.#date)
	}
	#enableDateUpdate() {
		setInterval(() => {
			this.#timerTextHTML.textContent = this.#getTimerContent()
		}, 1000)
	}

	render() {
		this.#timerContainer.id = `timer`
		this.#timerTextHTML.className = `timer-text`
		this.#timerTextHTML.textContent = this.#getTimerContent()

		const todayDateHTML = document.createElement(`div`)
		todayDateHTML.className = `today-date`
		todayDateHTML.textContent = `Сегодня: ${DateUtils.getTodayDateFormat(new Date())} `

		this.#timerContainer.append(this.#timerTextHTML, todayDateHTML)
		this.#enableDateUpdate()
		return this.#timerContainer
	}
}
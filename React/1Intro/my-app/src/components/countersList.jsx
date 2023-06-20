import React, { useState } from "react"
import CounterMy from "./CounterMy"

const CountersList = () => {
	const initialState = [
		{ id: 0, value: 0, name: 'ненужная вещь', price: 200 },
		{ id: 1, value: 0, name: 'ложка' },
		{ id: 2, value: 0, name: 'вилка' },
		{ id: 3, value: 0, name: 'тарелка' },
		{ id: 4, value: 0, name: 'набор минималиста' },
	]

	const [counters, setCounters] = useState(initialState)

	const handleDelete = (keyId) => {
		const newCounters = counters.filter(item => item.id !== keyId)
		setCounters(newCounters)
	}
	const handleReset = () => {
		setCounters(initialState)
	}

	const handleIncrement = (hid) => {
		let count = counters[hid]
		count.value += 1
		
	}
	const handleDecrement = (hid) => {
		let count = counters[hid]
		count.value -= 1
		
	}

	return (
		<>
			{counters.map(counter =>
				<CounterMy key={counter.id} {...counter} onDelete={handleDelete} onIncrement={handleIncrement} onDecrement={handleDecrement} />
			)}
			<button className="btn btn-primary btn-sm m-2" onClick={handleReset}>сброс</button>
		</>)
}

export default CountersList
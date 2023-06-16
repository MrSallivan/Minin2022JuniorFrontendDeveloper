import React, { useState } from "react"
import CounterMy from "./CounterMy"

const CountersList = () => {
	const [counters, setCounters] = useState([
		{ id: 0, value: 5, name: 'ненужная вещь' },
		{ id: 1, value: 0, name: 'ложка' },
		{ id: 2, value: 8, name: 'вилка' },
		{ id: 3, value: 8, name: 'тарелка' },
		{ id: 4, value: 8, name: 'набор минималиста' },
	])
	const handleDelete = () => {
		console.log('handele delete');
	}
	return (
		<>
			{counters.map(counter =>
				<CounterMy key={counter.id} value={counter.value} name={counter.name} onDelete={handleDelete} />
			)}
		</>)
}

export default CountersList
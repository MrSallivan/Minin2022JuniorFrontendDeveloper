import React from "react"
import CounterMy from "./CounterMy"

const CountersList = () => {
	const counters = [
		{ id: 0, value: 0 }, 
		{ id: 1, value: 4 }, 
		{ id: 2, value: 8 }
	]

	return (
		<>
			{counters.map(counter => <CounterMy key={counter.id} />)}
		</>)
}

export default CountersList
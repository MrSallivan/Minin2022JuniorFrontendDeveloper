import React, { useState } from "react"

const CounterMy = (props) => {

	let [value, setValue] = useState(props.value)
	
	const formatValue = () => {
		return value === 0 ? 'empty' : value
	}
	const increment = () => {
		setValue((prevState) => prevState + 1)
	}
	const decrement = () => {
		setValue((prevState) => prevState - 1)
	}
	const bgBadge = () => {
		const badgeClass = `badge text-bg-primary m-2`
		const badgeClassEmpty = `badge text-bg-warning m-2`
		return value === 0 ? badgeClassEmpty : badgeClass
	}
	
	return (
		<div>
			<span>{props.name}</span>
			<span className={bgBadge()} >{formatValue()}</span>
			<button className="btn btn-primary btn-sm m-2" onClick={increment}>+</button>
			<button className="btn btn-primary btn-sm m-2" onClick={decrement}>-</button>
			<button className="btn btn-danger btn-sm m-2" onClick={()=>props.onDelete(props.id)}>Delete</button>
		</div>)

}
export default CounterMy

import React, { useState } from "react"

const CounterMy = (props) => {

	let { value } = props

	const formatValue = () => {
		return value === 0 ? 'empty' : value
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
			<button className="btn btn-primary btn-sm m-2" onClick={() => props.onIncrement(props.id)}>+</button>
			<button className="btn btn-primary btn-sm m-2" onClick={() => props.onDecrement(props.id)}>-</button>
			<button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Delete</button>
		</div>)

}
export default CounterMy

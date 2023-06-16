import React, { useState } from "react"

const CounterMy = (props) => {

	let [value, setValue] = useState(props.value)
	// const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])

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
	// const handleTags = (id) => {
	// 	setTags((prevState) => prevState.filter(item => id !== item))
	// }

	// const renderTags = () => {
	// 	return tags.length !== 0
	// 		?
	// 		tags.map(tag => <li key={tag} className="badge text-bg-primary m-2" onClick={() => handleTags(tag)}>{tag}</li>)
	// 		: 'empty tags'
	// }

	// if (tags.length !== 0) {
	// 	return <ul>
	// 		{renderTags()}
	// 	</ul>
	// }

	return (
		<div>
			<span>{props.name}</span>
			<span className={bgBadge()} >{formatValue()}</span>
			<button className="btn btn-primary btn-sm m-2" onClick={increment}>+</button>
			<button className="btn btn-primary btn-sm m-2" onClick={decrement}>-</button>
			<button className="btn btn-danger btn-sm m-2" onClick={props.onDelete}>Delete</button>
		</div>)

}
export default CounterMy

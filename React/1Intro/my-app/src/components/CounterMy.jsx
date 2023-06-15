import React, { useState } from "react"

const CounterMy = () => {
	let [count, setCount] = useState(0)
	// const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])

	const formatCount = () => {
		return count === 0 ? 'empty' : count
	}
	const increment = () => {
		setCount((prevState) => prevState + 1)
	}
	const decrement = () => {
		setCount((prevState) => prevState - 1)
	}
	const bgBadge = () => {
		const badgeClass = `badge text-bg-primary m-2`
		const badgeClassEmpty = `badge text-bg-warning m-2`
		return count === 0 ? badgeClassEmpty : badgeClass
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
			<span className={bgBadge()} >{formatCount()}</span>
			<button className="btn btn-primary btn-sm m-2" onClick={increment}>+</button>
			<button className="btn btn-primary btn-sm m-2" onClick={decrement}>-</button>
		</div>
	)
}
export default CounterMy
 
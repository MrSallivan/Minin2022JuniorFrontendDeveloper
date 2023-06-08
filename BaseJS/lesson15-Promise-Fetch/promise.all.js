// Promise.all([
// 	new Promise(),
// 	new Promise(),
// 	new Promise()
// ])

// Если хоть один промис вернул ошибку обработка остальных останавливается.
// Выполнится, когда обрабатвются все промисы.

const todoUrl = `https://jsonplaceholder.typicode.com/todos`
const ids = [43, 10, 5, 100, 101]
const container = document.querySelector('#data-container')

const createLiEl = (text) => {
	const crLi = document.createElement('li')
	const crA = document.createElement('a')
	crA.href = '#'
	crA.textContent = text
	crLi.append(crA)

	return crLi
}

const getTodosByIds = (ids) => {
	const requests = ids.map((id) => fetch(`${todoUrl}/${id}`))
	Promise.all(requests)
		.then((responses) => {
			const dataResults = responses.map(resp => resp.json())
			return Promise.all(dataResults)
		})
		.then((todos) => {
			console.log(todos);
			todos.forEach(todo => {
				const todoHTML = createLiEl(todo.title)
				container.append(todoHTML)
			})
		})
		.catch((error) => {
			console.log(error);
		})
}


getTodosByIds(ids)


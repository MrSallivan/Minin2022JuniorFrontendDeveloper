const todoUrl = `https://jsonplaceholder.typicode.com/todos`
const todos = fetch(todoUrl, { method: 'GET' })

const container = document.querySelector('#data-container')
const span = document.querySelector('#loader')

const createLiEl = (text) => {
	const crLi = document.createElement('li')
	const crA = document.createElement('a')
	crA.href = '#'
	crA.textContent = text
	crLi.append(crA)
	container.append(crLi)
}

const loader = (el) => {
	const isHidden = el.hasAttribute('hidden')
	if (isHidden) {
		el.removeAttribute('hidden')
	} else {
		el.setAttribute('hidden', '')
	}

}

todos
	.then((response) => {
		loader(span)
		if (!response.ok) {
			throw new Error(`Где то ошибка!`)
		}
		return response.json()
	})
	.then((data) => {
		data.forEach(element => {
			createLiEl(element.title)
		});
	})
	.catch(error => console.log(error))
	.finally(() => {
		loader(span)
		console.log('Данные полученны с сервера');
	})
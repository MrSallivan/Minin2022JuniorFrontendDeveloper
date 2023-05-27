const URL = `https://jsonplaceholder.typicode.com/users`
const users = fetch(URL, { method: 'GET' })

function createLi(name) {
	const liEl = document.createElement('li')
	const aEl = document.createElement('a')
	aEl.href = '#'
	aEl.textContent = name
	liEl.append(aEl)
	document.querySelector('#data-container').append(liEl)
}
function loader() {
	const span = document.querySelector('#loader')
	if (span.hasAttribute('hidden')) {
		span.removeAttribute('hidden')
	} else {
		span.setAttribute('hidden', '')
	}
}

users.then((response) => {
	loader()
	if (!response.ok) {
		throw new Error('Проверьте адрес запроса')
	}
	return response.json()
}).then((data) => {
	data.forEach((user) => {
		createLi(user.username)
	})
}).catch(error => console.error(error)).finally(() => {
	loader()
	console.log('OK');
})

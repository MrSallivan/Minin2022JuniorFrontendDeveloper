
const usersArr = [5, 6, 2, 1]
const URL = `https://jsonplaceholder.typicode.com/users`

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

function getUsersByIds(arr) {
	loader()
	const promises = usersArr.map(userId => {
		return fetch(`${URL}/${userId}`)
	})
	Promise.all(promises)
		.then(res => {
			const response = res.map(elem => {
				return elem.json()
			})
			console.log(response);
			return Promise.all(response)
		}).then(users => {
			console.log(users);
			users.forEach( user =>{
				createLi(user.username)
			})
		}).catch(error => console.log('error', error))
		.finally(()=>{
			loader()
		})
}


getUsersByIds(usersArr)



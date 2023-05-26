const person = {
	name: 'Alex',
	isJsDev: true
}

const promise = new Promise((resolve, reject) => {
	if (person.isJsDev) {
		setTimeout(() => {
			resolve(console.log(`${person.name} программист JS`))
		}, 3000)
	} else {
		reject(`${person.name} не программист JS`)
	}
})

promise
	.then((data) => {
		return data
	})
	.catch((eror) => {
		return console.log(eror)
	})
	.finally(() => {
		console.log('The end')
	})
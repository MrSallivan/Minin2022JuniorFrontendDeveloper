const URL = `https://jsonplaceholder.typicode.com/photos`
const ids = [60, 12, 55, 5]

function createLi(url, title) {
	const liEl = document.createElement('li')
	const imgEl = document.createElement('img')
	const h3El = document.createElement('h3')
	liEl.className = `photo-item`
	imgEl.className = `photo-item__image`
	imgEl.src = url
	h3El.className = `photo-item__title`
	h3El.textContent = title

	liEl.append(imgEl)
	liEl.append(h3El)
	
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

function getFastestLoadedPhoto(ids) {
	loader()
	const promises = ids.map((item =>{
		return fetch(`${URL}/${item}`)
	}))

	Promise.race(promises)
		.then((response)=>{
			return response.json()
		})
		.then(data => {
			createLi(data.url, data.title)
		})
		.catch(error => console.log('error', error))
		.finally(()=>{
			loader()
		})


}

getFastestLoadedPhoto(ids)
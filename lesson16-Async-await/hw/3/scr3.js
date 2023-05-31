const url = `https://jsonplaceholder.typicode.com/albums`
const Ul = document.querySelector('.data-container')

const renderAlbums = async (url) => {
	function loader() {
		const span = document.querySelector('.span-loader')
		if (span.hasAttribute('hidden')) {
			span.removeAttribute('hidden')
		} else {
			span.setAttribute('hidden', '')
		}
	}
	loader()
	try {
		const response = await fetch(url)
		const data = await response.json()
		data.forEach(element => {
			const liEl = document.createElement('li')
			liEl.textContent = element.title
			Ul.append(liEl)
		});
	} catch(error){
		const span = document.createElement('span')
		span.textContent = `Произошла ошибка в получении данных об альбомах...`
		span.style.color = `red`
		Ul.prepend(span)
		console.log(error);
	} finally{
		loader()
	}
	
}

renderAlbums(url)
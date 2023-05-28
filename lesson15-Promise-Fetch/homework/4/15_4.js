
function renderPost(postId) {
	loader()
	const urlposts = `https://jsonplaceholder.typicode.com/posts`
	const urlcomment = `https://jsonplaceholder.typicode.com/comments`

	function loader() {
		const span = document.querySelector('#loader')
		if (span.hasAttribute('hidden')) {
			span.removeAttribute('hidden')
		} else {
			span.setAttribute('hidden', '')
		}
	}

	const post = fetch(`${urlposts}/${postId}`)
	const comments = fetch(`${urlcomment}?postId=${postId}`)

	function createPost(pTitle, pText) {
		const divPost = document.createElement('div')
		divPost.className = `post`
		const h1Post = document.createElement('h1')
		h1Post.className = `post__title`
		h1Post.textContent = pTitle
		const textPost = document.createElement('p')
		textPost.className = `post__text`
		textPost.textContent = pText
		const bPostComText = document.createElement('b')
		bPostComText.className = `post__comments-text`
		bPostComText.textContent = `Комментарии: `
		const postComents = document.createElement('div')
		postComents.className = `post__comments`
		divPost.append(h1Post)
		divPost.append(textPost)
		divPost.append(bPostComText)
		divPost.append(postComents)
		document.body.append(divPost)
	}

	function creatComment(pcAuthor, pcText) {
		const comments = document.querySelector('.post__comments')
		const postComent = document.createElement('div')
		postComent.className = `post-comment`
		const spanAut = document.createElement('span')
		spanAut.className = `post-comment__author`
		spanAut.textContent = pcAuthor
		const spanText = document.createElement('span')
		spanText.className = `post-comment__text`
		spanText.textContent = pcText
		postComent.append(spanAut)
		postComent.append(spanText)
		comments.append(postComent)
	}


	Promise.all([post, comments])
		.then((response) => {
			const responses = response.map((resp => resp.json()))
			return Promise.all(responses)
		})
		.then((data) => {
			const postPromise = data[0]
			const comentPromise = data[1]
			createPost(postPromise.title, postPromise.body)
			comentPromise.forEach(element => {
				creatComment(element.email, element.body)
			})
		})
		.catch(error => console.log('error', error))
		.finally(()=>{
			loader()
		})
}

renderPost(5)
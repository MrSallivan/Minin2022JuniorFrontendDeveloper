
function renderPost(postId) {
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
	Promise.all([post, comments])
		.then()








}
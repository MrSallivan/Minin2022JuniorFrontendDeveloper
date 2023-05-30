const urlposts = `https://jsonplaceholder.typicode.com/posts`
const urlcomment = `https://jsonplaceholder.typicode.com/comments44`

const getTodosWithUserData = async (idNum) => {
	try {
		const response = await fetch(`${urlposts}/${idNum}`)
		console.log(response);
		const posts = await response.json()
		console.log(posts);
		const userId = posts.userId
		const commentsResponse = await fetch(`${urlcomment}/?postId=${userId}`)
		console.log(commentsResponse);
		const comments = await commentsResponse.json()
		console.log(comments);
	} catch (error) {
		console.log('error', error);
	} finally{
		console.log('finally');
	}

}


//try catch finally 

// try {

// } catch (error) {
// 	console.log('error', error)
// } finally {
// 	console.log('finally')
// }


const promise = getTodosWithUserData(5)
console.log(promise);
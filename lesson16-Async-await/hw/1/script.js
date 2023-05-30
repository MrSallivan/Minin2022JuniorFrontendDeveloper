const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
let isLoading = false
const createNewPost = async (userId)=>{
	isLoading = true
	try{
		const response = await fetch(POSTS_URL)
		if(!response.ok){
			throw new Error('Ошибка в адресе запроса')
		}
		const posts = await response.json()
		const rez = posts.filter(post => post.userId === userId)
		console.log('posts', rez)
	} catch(error){
		console.log('error', error);
	} finally{
		console.log('Well done');
	}
}

createNewPost(7)
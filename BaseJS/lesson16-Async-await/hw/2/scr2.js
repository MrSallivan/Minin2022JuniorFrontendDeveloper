const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

const getTodosById = async (ids) =>{
	const requests = ids.map(id => fetch(`${TODOS_URL}/${id}`))
	const responses = await Promise.all(requests)
	const dateResults = await Promise.all(responses.map(data=>data.json()))
	console.log(dateResults);
}
getTodosById([10,20,15])
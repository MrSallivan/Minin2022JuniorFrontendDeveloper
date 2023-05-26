const TODOS_URL = `https://jsonplaceholder.typicode.com/todos`
const rezult = fetch(TODOS_URL, { method: 'GET' })

const toggleLoader = ()=>{
	const spanLoad = document.querySelector('#loader')
	const isHidden = spanLoad.hasAttribute('hidden')
	if(isHidden){
		spanLoad.removeAttribute('hidden')
	} else{
		spanLoad.setAttribute('hidden', '')
	}
}


const createTodoEl = (text)=>{
	const todoEl = document.createElement('li')
	const todoEla = document.createElement('a')
	todoEla.href = `#`
	todoEla.textContent = text
	todoEl.append(todoEla)
	return todoEl
}
const dataContainer = document.querySelector(`#data-container`)

const getAllTodos = () => {

	toggleLoader()
	rezult
		.then((response) => {
			if (!response.ok) {
				throw new Error('Хз что за адрес')
			}
			return response.json()
		})
		.then((data) => {
			data.forEach((todo) => {
				const todoHTML = createTodoEl(todo.title)
				dataContainer.append(todoHTML)
			});
		})
		.catch(error => console.log(error))
		.finally(()=>{
			toggleLoader()
		})
}


getAllTodos()
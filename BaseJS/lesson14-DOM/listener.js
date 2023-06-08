const ferstNavButton = document.querySelector('.main-navigation__button-item')
const allNavButton = document.querySelectorAll('.main-navigation__button-item')
allNavButton.forEach((button) => {
	button.addEventListener('click', (e) => {
		allNavButton.forEach(button => {
			button.classList.remove('clicked')
		})
		const { target } = e
		target.classList.add('clicked')
	})
})

//! Submit

// const createTaskForm = document.querySelector('.create-task-block')
// createTaskForm.addEventListener('submit', e => {
// 	console.log(e);
// 	e.preventDefault()
// 	const { target } = e
// 	const taskNameInput = target.taskName
// 	const inputValue = taskNameInput.value
// 	console.log(taskNameInput);
// 	console.log(inputValue);
// 	if (inputValue) {
// 		alert(`Вы создали задачу ${inputValue}`)
// 	} else {
// 		alert('Введите данные!')
// 	}
// })

//! keydown, keyup
// document.addEventListener('keydown', (e) => {
// 	const { key } = e
// 	console.log('keydown', key);
// 	const taskItemToDelete = document.querySelector(`[data-task-id="${key}"]`)
// 	if (taskItemToDelete) {
// 		const deleteConfirmed = confirm('Вы хотите удалить данную задачу?')
// 		if (deleteConfirmed) {
// 			taskItemToDelete.remove()
// 		}
// 	}
// })
// document.addEventListener('keyup', (e) => {
// 	const { key } = e
// 	console.log('keyup', key);

// })

//! MOUSEOVER - мышь над элементом

const createTooltip = function (text) {
	const tooltip = document.createElement('span')
	tooltip.textContent = text
	tooltip.className = 'tooltip'
	return tooltip
}

document.addEventListener('mouseover', (e) => {
	// console.log(e.target);
	const { target } = e
	const isOverDeleteButton = target.className.includes('task-item__delete-button')
	if (isOverDeleteButton) {
		console.log('succes');
		const taskItemHTML = target.closest('.task-item')
		console.log(taskItemHTML);
		const taskId = taskItemHTML?.dataset.taskId
		console.log(taskId);
		if (taskId) {
			const tooltipHTML = createTooltip(`Удалить задачу под номером ${taskId}?`)
			target.append(tooltipHTML)
		}
	}
})

//!mouseout 
document.addEventListener('mouseout', (e) => {
	const { target } = e
	const isOutDeleteButton = target.className.includes('task-item__delete-button')
	if (isOutDeleteButton) {
		const tooltip = document.querySelector('.tooltip')
		if (tooltip) {
			tooltip.remove()
		}
	}
})

//! MOusemove 

// document.addEventListener('mousemove', (e)=>{
// 	console.log(e);
// })

//! contextmenu

document.addEventListener('contextmenu', (e) => {
	console.log(e);
	e.preventDefault()
})

//! CHANGE, INPUT - change сработает когда убираем фокус, imput работает сразу

const checkTaskNameInputOnVal = (value) => {
	if (!value || value.includes('@')) {
		return false
	}
	return true
}

const createTaskBlock = document.querySelector('.create-task-block')
createTaskBlock.style.position = 'relative'
const taskNameInput = createTaskBlock.querySelector('.create-task-block__input')


taskNameInput.addEventListener('change', (e) => { //input
	const {target} = e
	const {value} = target
	console.log(value);
	const isValid = checkTaskNameInputOnVal(value)
	const messageBlockErrorFromDOM = document.querySelector('.error-message-block')
	
	
	if(!isValid){
		const newMessageBlock = document.createElement('span')
		newMessageBlock.className = 'error-message-block'
		newMessageBlock.textContent = 'Ошибка, текст пустой, либо содеожит @'
		createTaskBlock.append(newMessageBlock)
	}else if (isValid && messageBlockErrorFromDOM){
		messageBlockErrorFromDOM.remove()
	}
})

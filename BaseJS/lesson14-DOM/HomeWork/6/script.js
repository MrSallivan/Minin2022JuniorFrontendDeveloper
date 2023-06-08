const tasks = [
	{
		id: '1138465078061',
		completed: true,
		text: 'Посмотреть новый урок по JavaScript',
	},
	{
		id: '1138465078062',
		completed: false,
		text: 'Выполнить тест после урока',
	},
	{
		id: '1138465078063',
		completed: true,
		text: 'Выполнить ДЗ после урока',
	},
]



const tasksEl = document.createElement('div')
tasksEl.className = 'tasks'

const tasksList = document.createElement('div')
tasksList.className = `tasks-list`

document.body.prepend(tasksEl)
tasksEl.append(tasksList)

const taskWrapper = document.createElement('div')
taskWrapper.className = `tasks__wrapper`
taskWrapper.innerHTML = `
		<form class="create-task-block">
        <input
          name="taskName"
          class="create-task-block__input default-text-input"
          type="text"
          placeholder="Создайте новую задачу"
          value="Посмотреть урок по JavaScript"
        >
        <button
          type="submit"
          class="create-task-block__button default-button"
        >
          Создать
        </button>
      </form>
`
tasksEl.prepend(taskWrapper)
const form = document.querySelector('.create-task-block')



const createTask = (taskId, taskText, completed) => {

	const taskItem = document.createElement('div')
	taskItem.className = 'task-item'
	taskItem.dataset.taskId = `${taskId}`

	const taskItemMainContainer = document.createElement('div')
	taskItemMainContainer.className = 'task-item__main-container'

	const taskItemMainContent = document.createElement('div')
	taskItemMainContent.className = 'task-item__main-content'

	const form = document.createElement('form')
	form.className = 'checkbox-form'

	const input = document.createElement('input')
	input.className = 'checkbox-form__checkbox'
	input.type = 'checkbox'
	input.id = `task-${taskId}`

	const label = document.createElement('label')
	label.htmlFor = `task-${taskId}`
	if (completed) {
		input.setAttribute('checked', '')
	}

	const span = document.createElement('span')
	span.className = `task-item__text`
	span.textContent = `${taskText}`

	const btn = document.createElement('button')
	btn.className = 'task-item__delete-button default-button delete-button'
	btn.dataset.deleteTaskId = `${taskId}`
	btn.textContent = `Удалить`

	tasksList.append(taskItem)
	taskItem.append(taskItemMainContainer)
	taskItemMainContainer.append(taskItemMainContent)
	taskItemMainContent.append(form)
	form.append(input)
	form.append(label)
	taskItemMainContent.append(span)
	taskItemMainContainer.append(btn)

	return taskItem
}

form.addEventListener('submit', (e) => {
	e.preventDefault()
	const inputEl = document.querySelector('.create-task-block__input')
	const valueText = inputEl.value
	const task = {}
	task.id = Date.now()
	task.completed = false
	task.text = valueText

	//Валидация

	const errorSpanEl = document.createElement('span')
	errorSpanEl.className = 'error-message-block'
	errorSpanEl.textContent = 'Название задачи не должно быть пустым'


	const isPairTask = tasks.map(task => task.text.includes(valueText)).includes(true)

	const spanError = document.querySelector('.error-message-block')
	if (spanError) {
		spanError.remove()
	}

	if (valueText == '') {
		document.body.append(errorSpanEl)
	} else if (isPairTask) {
		document.body.append(errorSpanEl)
		errorSpanEl.textContent = 'Задача с таким названием уже существует.'
	} else {
		tasks.push(task)
		const createdTask = createTask(task.id, task.text, task.completed)
		tasksList.append(createdTask)
	}



})

tasks.forEach((task) => {
	const createdTask = createTask(task.id, task.text, task.completed)
	tasksList.append(createdTask)
})

const modalWindow = document.createElement('div')
modalWindow.classList.add('modal-overlay', 'modal-overlay_hidden')
modalWindow.innerHTML = `
	<div class="delete-modal">
			<h3 class="delete-modal__question">
		Вы действительно хотите удалить эту задачу?
			</h3>
			<div class="delete-modal__buttons">
			<button class="delete-modal__button delete-modal__cancel-button">
			Отмена
			</button>
			<button class="delete-modal__button delete-modal__confirm-button">
			Удалить
			</button>
		</div>
	</div>
		
		`
document.body.append(modalWindow)

const tasksListEl = document.querySelector('.tasks-list')
tasksListEl.addEventListener('click', (e) => {
	const { target } = e
	console.log(target);
	const idTaskToDel = target.dataset.deleteTaskId
	console.log(idTaskToDel);

	const isDeleteButton = target.closest('.task-item__delete-button')
	if (isDeleteButton) {
		const modalWinEl = document.querySelector('.modal-overlay')
		modalWinEl.classList.remove('modal-overlay_hidden')

		modalWinEl.addEventListener('click', (e) => {
			const { target } = e
			const isCancelButton = target.closest('.delete-modal__cancel-button')

			if (isCancelButton) {
				modalWinEl.classList.add('modal-overlay_hidden')
			}
			const isConfirmButton = target.closest('.delete-modal__confirm-button')
			if (isConfirmButton) {
				modalWinEl.classList.add('modal-overlay_hidden')

				const taskToDelEl = document.querySelector(`[data-task-id="${idTaskToDel}"]`)
				console.log(taskToDelEl);
				taskToDelEl.remove()
				tasks.forEach((task, index) => {
					if (task.id == idTaskToDel) {
						delete tasks[index]
					}
				})
			}
		})
	}

})

const taskItemsEl = Array.from(document.querySelectorAll('.task-item'))


const themeButton = () => {
	const themButton = document.createElement('div')
	themButton.className = 'them-button'
	document.body.prepend(themButton)
	themButton.addEventListener('click', () => {
		document.body.classList.toggle('them-class')
		taskItemsEl.forEach(el => {
			const color = el.style.color
			if (color == 'white') {
				el.style.color = 'initial'
			} else {
				el.style.color = 'white'
			}
		})
	})
}

themeButton()
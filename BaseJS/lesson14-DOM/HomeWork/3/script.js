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

	tasks.push(task)
	const createdTask = createTask(task.id, task.text, task.completed)
	tasksList.append(createdTask)
	
})

tasks.forEach((task) => {
	const createdTask = createTask(task.id, task.text, task.completed)
	tasksList.append(createdTask)
})
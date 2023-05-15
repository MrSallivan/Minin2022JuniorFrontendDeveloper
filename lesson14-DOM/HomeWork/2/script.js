const tasks = [
	{
		id: '1138465078061',
		completed: false,
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

document.body.prepend(tasksEl)

tasks.forEach((task) => {
	const id = task.id
	const inputText = task.text
	const isCompleted = task.completed

	const taskItem = document.createElement('div')
	taskItem.className = 'task-item'
	taskItem.dataset.taskId = `${id}`

	const taskItemMainContainer = document.createElement('div')
	taskItemMainContainer.className = 'task-item__main-container'

	const taskItemMainContent = document.createElement('div')
	taskItemMainContent.className = 'task-item__main-content'

	const form = document.createElement('form')
	form.className = 'checkbox-form'

	const input = document.createElement('input')
	input.className = 'checkbox-form__checkbox'
	input.type = 'checkbox'
	input.id = `task-${id}`

	const label = document.createElement('label')
	label.htmlFor = `task-${id}`
	if(isCompleted){
		input.setAttribute('checked', '')
	}

	const span = document.createElement('span')
	span.className = `task-item__text`
	span.textContent = `${inputText}`

	const btn = document.createElement('button')
	btn.className = 'task-item__delete-button default-button delete-button'
	btn.dataset.deleteTaskId = `${id}`
	btn.textContent = `Удалить`

	tasksEl.append(taskItem)
	taskItem.append(taskItemMainContainer)
	taskItemMainContainer.append(taskItemMainContent)
	taskItemMainContent.append(form)
	form.append(input)
	form.append(label)
	taskItemMainContent.append(span)
	taskItemMainContainer.append(btn)

})
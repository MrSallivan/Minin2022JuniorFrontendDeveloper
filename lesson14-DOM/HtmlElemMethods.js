//! CreateElement
const newNavButton = document.createElement('a')
newNavButton.className = 'main-navigation__button-item'
newNavButton.href = '#tasks_expired'
newNavButton.dataset.buttonId = '4'
newNavButton.textContent = 'Просроченные задачи'

//! Append - добавляет в конец, prepend - добавляет в начало

const mainNavigation = document.querySelector('.main-navigation')
// mainNavigation.append(newNavButton)

//! InsertAjacentElement(position, element). 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
mainNavigation.insertAdjacentElement('beforeend', newNavButton)

//! Удаление элементов

// mainNavigation.remove()

//! CLOSEST ищет ближайший родительский элемент или элемент перед точкой

const taskItemText = document.querySelector('.task-item__text')
const taskItem = taskItemText.closest('.task-item__main-content')
console.log(taskItem);

//! ClassList

const ferstNavButton = document.querySelector('.main-navigation__button-item')
ferstNavButton.classList.add('classs')
ferstNavButton.classList.remove('classs')
// ferstNavButton.classList.toggle('classs')
ferstNavButton.onclick = (e)=>{
	e.target.classList.toggle('classs')
}

const createTaskInput = document.querySelector('.create-task-block__input')
console.log(createTaskInput.hasAttribute('type'));
console.log(createTaskInput.getAttribute('value'));
console.log(createTaskInput.removeAttribute('placeholder'));
console.log(createTaskInput.setAttribute('placeholder', 'Создать новую задачу'));

//! CreateElement
const newNavButton = document.createElement('a')
newNavButton.className = 'main-navigation__button-item'
newNavButton.href = '#tasks_expired'
newNavButton.dataset.buttonId = '4'
newNavButton.textContent = 'Просроченные задачи'

//! Append - добавляет в конец, prepend - добавляет в начало

const mainNavigation = document.querySelector('.main-navigation')
mainNavigation.append(newNavButton)
const taskWrap = document.querySelector('.tasks__wrapper')
console.log(taskWrap.className);
console.log(taskWrap.id);

taskWrap.className = 'one'
taskWrap.id = 'hz'

console.log(taskWrap.children);

const btn = document.querySelector('.create-task-block__button')
btn.innerHTML
btn.textContent
btn.innerHTML = 'text'
btn.textContent = 'text2'

// taskWrap.innerHTML = '<b>text</b>'

const navBtn = document.querySelector('.main-navigation__button-item')
console.log(navBtn.dataset);
navBtn.dataset.buttonId = '55'

navBtn.style.backgroundColor = 'red'
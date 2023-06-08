//!1

// document.body.innerHTML = `
// <form class="create-user-form">
// <label>
// Имя
// <input type="text" name="userName" placeholder="Введите ваше
// имя">
// </label>
// <label>
// Пароль
// <input type="password" name="password" placeholder="Придумайте
// Пароль">
// </label>
// <button type="submit">
// Подтвердить
// </button>
// </form>
// `

//!2

const form = document.createElement('form')
form.className = 'create-user-form'

const btn = document.createElement('button')
btn.setAttribute('type', 'submit')
btn.textContent = 'Подтвердить'

const label = (name) => {
	const label = document.createElement('label')
	label.textContent = `${name}`
	return label
}
const labelName = label('Имя')
const labelPasswd = label('Пароль')

const input1 = document.createElement('input')
input1.setAttribute('type', 'text')
input1.setAttribute('name', 'userName')
input1.setAttribute('placeholder', 'Введите ваше имя')

const input2 = document.createElement('input')
input2.setAttribute('type', 'password')
input2.setAttribute('name', 'password')
input2.setAttribute('placeholder', 'Придумайте пароль')

form.append(labelName)
labelName.append(input1)
form.append(labelPasswd)
labelPasswd.append(input2)
form.append(btn)

document.body.prepend(form)
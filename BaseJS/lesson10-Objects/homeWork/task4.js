// Задание #4
// Вам необходимо создать функцию giveJobToStudent, которая будет добавлять новое
// свойство в объект и выводить информацию в модальном окне.Она принимает в себя 2
// параметра:
// 1. student - объект, содержащий информацию о студенте
// 2. jobName - название новой работы студента
// Функция giveJobToStudent выводит в модальное окно сообщение “Поздравляем! У
// студента fullName появилась новая работа! Теперь он jobName”, где fullName - это имя
// студента, а jobName - название новой работы студента.
// Функция giveJobToStudent должна возвращать новый объект студента, в котором будут
// все ключи из объекта student и также появится новый ключ job со значением параметра
// jobName.
// Для теста функции giveJobToStudent используйте следующий код:

const student4 = {
	fullName: 'Максим',
	experienceInMonths: 12,
	stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}
const updatedStudent = giveJobToStudent(student4, 'веб-разработчик');
console.log(updatedStudent);

/*
updatedStudent = {
fullName: 'Максим',
experienceInMonths: 12,
stack: ['HTML', 'CSS', 'JavaScript', 'React'],
job: 'веб-разработчик',
}
*/
//my option 
function giveJobToStudent(obj, work) {
	alert(`“Поздравляем! У студента ${obj.fullName} появилась новая работа! Теперь он ${work}”`)

	return { ...obj, job: work, }
}
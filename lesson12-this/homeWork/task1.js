// Задание #1
// Представьте, что вас как веб - разработчика попросили разработать веб - платформу,
// 	которая будет отслеживать прогресс студентов в обучении веб - разработке.
// Для начала вам необходимо создать объект student, в котором будут 3 свойства:
// 1. stack.Массив из строк, где каждая строка - это технология.Изначально, массив
// stack должен быть равен[‘HTML’].
// 2. level.Тип данных number.level отвечает за текущий уровень студента и изначально
// равен 1.
// 3. improveLevel.Функция, которая сначала увеличивает значение свойства level у
// студента на единицу.Если level равен 2 - м, то вам необходимо добавить в конец
// массива stack значение ‘CSS’, если 3 - м - добавляете в конец stack значение
// ‘JavaScript’, 4 - м - ‘React’, 5 - ти - ‘NodeJS’. Если значение level стало больше 5 - ти, то
// вам необходимо вывести в модальном окне через alert сообщение “Студент выучил
// все технологии!”. Также функция improveLevel должна возвращать в самом конце
// обновленный объект student.
// В итоге значение свойства stack после выполнения кода ниже должно быть равно
// ["HTML", "CSS", "JavaScript", "React", "NodeJS"].
// student
// .improveLevel()
// .improveLevel()
// .improveLevel()
// .improveLevel()
// .improveLevel()
// Примечание: цепочка из подряд идущих функций impoveLevel работает так, потому что
// improveLevel возвращает объект student, а у объекта student есть метод impoveLevel.
// Посмотрите на пример:

const student = {
	stack: ['HTML'],
	level: 1,
	improveLevel() {
		this.level++
		switch (this.level) {
			case 2:
				this.stack.push('CSS')
				break;
			case 3:
				this.stack.push('JavaScriptS')
				break;
			case 4:
				this.stack.push('React')
				break;
			case 5:
				this.stack.push('NodeJS')
				break;
			case 6:
				console.log(`Student learn all technology`)
				break;
			default:
				console.log(`Student learn all technology`)
				break;
		}
		return this;
	}
};
console.log(
	student
		.improveLevel()
		.improveLevel()
		.improveLevel()

);
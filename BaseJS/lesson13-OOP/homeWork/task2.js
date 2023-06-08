// Задание #2
// Вам необходимо создать класс Person, от него мы сможем создавать экземпляры
// людей.Конструктор класса будет принимать 2 параметра:
// 1. name - имя человека
// 2. age - количество полных лет
// Также вам необходимо реализовать метод compareAge в классе Person.Он принимает в
// себя экземпляр класса Person и сравнивает значения полных лет.
// Данный метод должен возвращать результат в следующем формате: Если у одного
// Person количество лет больше либо равно, чем у другого, то выводите сообщение через
// alert “name1 старше, чем name2”. Иначе же “name1 младше, чем name2”.
// Запускайте данный код для теста работы вашего класса Person

class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	compareAge(person) {
		if (person.age > this.age) {
			console.log(`${person.name} старше, чем ${this.name}`)
		} else {
			console.log(`${person.name} младше, чем ${this.name}`)
		}
	}
}

const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);

person1.compareAge(person2); // Максим младше, чем Светлана
person2.compareAge(person3); // Светлана старше, чем Ирина
person3.compareAge(person1); // Ирина младше, чем Максим
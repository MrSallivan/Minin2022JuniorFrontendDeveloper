// Вам требуется создать функцию giveTalonsInOrder, которая сортирует очередь из
// пациентов. Она принимает в себя 2 параметра:
// 1. patients - массив объектов. Каждый объект хранит информацию об имени пациента
// и его уникальном номере - id.
// 2. orders - массив уникальных номеров id, который указывает порядок, в котором
// должны стоять в очереди пациенты.
// Функция должна возвращать новый массив, в котором объекты из массива patients будут
// отсортированы по id из массива orders.
// Посмотрите на возможный результат функции giveTalonsInOrder:

const ordersArr = [4, 2, 1, 3];

const people = [
{ id: 2, name: "Николай" },
{ id: 1, name: "Максим" },
{ id: 4, name: "Виталий" },
{ id: 3, name: "Ангелина" },
];

//variant 1

const giveTalonsInOrder = (people, orders) => {
	const ObjectWithIndex = people.reduce((acc, item) => {
		acc[item.id] = item
		return acc
	}, {})
	return orders.map(item => ObjectWithIndex[item])
}

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);

/* Возвращает массив
[
{ id: 4, name: 'Виталий' },
{ id: 2, name: 'Николай' },
{ id: 1, name: 'Максим' },
{ id: 3, name: 'Ангелина' }
]
*/

//variant 2
// function giveTalonsInOrder(people, orders) {
// 	const rez = []
// 	orders.forEach(element => {
// 		people.forEach(item =>{
// 			if( element === item.id) {
// 				rez.push(item)
// 			}
// 		})
// 	});

// 	return rez
// }
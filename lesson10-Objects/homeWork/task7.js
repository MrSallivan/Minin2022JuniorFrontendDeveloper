// Задание #7(дополнительное)
// Представьте, что в полицейском участке проводится расследование.Было совершено
// несколько преступлений.У полицейских есть другие более приоритетные задания,
// 	поэтому они попросили вас написать программу, которая будет вычислять преступника по
// уже известным данным.
// Ваша задача состоит в том, чтобы создать функцию getKiller.getKiller принимает в себя
// 2 параметра:
// 1. suspectInfo.Это объект, в котором ключи - это подозреваемые в преступлении
// люди, а значения - массивы людей, которых видели подозреваемые в день
// убийства
// 2. deadPeople.Это массив с именами людей, которых убил преступник
// Преступником является тот, кто видел всех убитых людей в день убийства.Функция
// getKiller должна возвращать имя преступника.
// Примеры результатов функции getKiller:
getKiller(
	{
		'James': ['Jacob', 'Bill', 'Lucas'],
		'Johnny': ['David', 'Kyle', 'Lucas'],
		'Peter': ['Lucy', 'Kyle'],
	},
	['Lucas', 'Bill']
); // Убийца James
getKiller(
	{
		'Brad': [],
		'Megan': ['Ben', 'Kevin'],
		'Finn': [],
	},
	['Ben']
); // Убийца Megan
function getKiller(obj, arrKill) {
	let killer = ''
	Object.entries(obj).forEach(data => {
		const suspectPerson = data[0]
		const peopleWereSeen = data[1]
		const isKiller = arrKill.every((deadName) => peopleWereSeen.includes(deadName))
		if (isKiller) {
			killer = suspectPerson
		}
	});
	return console.log(`Killer is ${killer}`);
}

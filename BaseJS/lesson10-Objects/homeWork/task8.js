// Задание #8(дополнительное)
// Вы когда - нибудь играли в лотерею ? Лотерея - это игра, в которой случайным образом
// определяют победителя и дают ему выигрыш.Сейчас ваша задача будет разработать
// логику для такой игры.
// Вам необходимо создать функцию getWinner, которая принимает в себя 2 параметра:
// 1. applicants.Объект, в котором ключи - это номерки людей, по которым будет
// производится случайный отбор, а значения - это объекты кандидатов на выигрыш в
// лотерее
// 2. winnerObject.Это объект, в котором хранится всего 1 ключ prize, хранящий
// значения размера выигрыша в лотерее
// Вам необходимо случайным образом выбрать победный номерок(случайный ключ в
// объекте applicants) и вернуть из функции getWinner объект, в котором будут хранится
// свойства из winnerObject и объект победителя.
// Для получения случайного значения в диапазоне используйте следующую функцию:
function getRandomNumberInRange(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
// Пример возвращаемого результата функции getWinner:
const todaysWinner = {
	prize: '10 000$',
}
const winnerApplicants = {
	'001': {
		name: 'Максим',
		age: 25,
	},
	'201': {
		name: 'Светлана',
		age: 20,
	},
	'304': {
		name: 'Екатерина',
		age: 35,
	},
}
const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner);
// { prize: '10 000$', name: 'Максим', age: 25 }
function getWinner(winnerApplicants, todaysWinner) {
	const keysWiiners = Object.keys(winnerApplicants)
	const numberKeysWinner = getRandomNumberInRange(0, keysWiiners.length)
	return { ...todaysWinner, ...winnerApplicants[`${keysWiiners[numberKeysWinner]}`] }
}
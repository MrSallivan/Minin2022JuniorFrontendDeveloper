// Возвращает самый быстро выполненный промис. Причеи не важно какой у него статус reject or fullfill.
// Promise.race([
// 	new Promise(),
// 	new Promise(),
// 	new Promise(),
// ])

const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(`Promise1`)
	}, 100)
})
const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(`Promise2`)
	}, 500)
})
const promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(`Promise3`)
	}, 2000)
})

Promise.race([promise1, promise2, promise3])
	.then((result) => {
		console.log('result', result);
	})
	.catch((error) => {
		console.log('error', error)
	})

//1
const currentDev = ['Max','Oleg']
const newDev = ['Anton', 'Gleb']

const allDev = currentDev.concat(newDev)
console.log(allDev);

//2 ...
const carsMassive = ['BMW', 'Reno']
const allDeveloper = Array.from(allDev)

const allDeveloper2 = [...allDeveloper, ...carsMassive]
console.log(allDeveloper2);
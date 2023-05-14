//1. Преобразование к строке

const age = 20
console.log('string age', typeof String(age)) // string - явное преобразование

const updateAge = '1' + 20 // string - не явное преобразование
console.log(typeof updateAge) //строка '121'

//2. Преобразование к числу

const experiensYear = '5'
console.log('string age', typeof Number(age)) // number - явное преобразование
console.log(typeof +experiensYear) // number - не явное преобразование

console.log('hello', Number('Hello')) // Nan

//3. Преобразование к boolean

console.log(Boolean('hello')) //true
console.log(Boolean(5)) //true
console.log(Boolean(0)) //false
console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean('')) //false
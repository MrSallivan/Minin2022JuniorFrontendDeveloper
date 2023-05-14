//Methods string
// 1. toUpperCase() - вернет новую заглавную строку
// 2. toLowerCase() - вернет новую строчную строку

// 3. indexOf() - вернет индекс первого вхождения
// 4. includes() - вернет true или false если есть вхождение

// 5. slice() -  вернет новую строку не изменяя существующею
// 1- индекс с которого начинаем обрезку
//2 - индекс где заканчиваем обрезку
const jsStr = "java Script"
console.log(jsStr.slice(1, 5))

// 6. substring() -  вернет новую строку не изменяя существующею
// 1- индекс с которого начинаем обрезку
//2 - индекс где заканчиваем обрезку
console.log(jsStr.substring(2, 6))

// 7. replace() - изменяет первое вхождение
console.log(jsStr.replace('Script', 'Rush'))

// 8. replaceAll() 
console.log(jsStr.replaceAll('a', 'A'))

// 9. replaceAll() 
console.log(jsStr.repeat(2))

// 10. trim() - удаляет пробелы в начале и в конце
let str = prompt('Name')
console.log(str.trim())
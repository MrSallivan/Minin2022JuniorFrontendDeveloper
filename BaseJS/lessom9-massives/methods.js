//method MAP
//применяет какок либо действие к каждому элементу массива.
//Возвращает новый массив

const salaries = [400, 500, 600, 2000, 350]

const mapSal = salaries.map((item, index, arr)=>{
return item * 2
})
console.log('map', mapSal);

//method FILTER
//возвращает элеиент массива если выполняется условие true
//Возвращает новый массив

const filterSal = salaries.filter((item, index, arr)=>{
	return item >= 600
})
console.log('filter', filterSal);

//method FIND
//возвращает элеиент массива если выполняется условие. Если несколько элементов подходят под условие возвращает первый.
//Возвращает элемент

const findSal = salaries.find((item, index, arr)=>{
	return item == 2000
})
console.log('find', findSal);
//method FindIndex
//возвращает элеиент индекс если выполняется условие. Если несколько элементов подходят под условие возвращает первый.
//Возвращает индекс или -1 если элемент не найден

const findIndexSal = salaries.findIndex((item, index, arr)=>{
	return item === 600
})
console.log('findIndex', findIndexSal);

//method Some
//возвращает тру или фолс. Тру если хотябы один элемент подподает под условие, иначе фолс.

const someSal = salaries.some((item, index, arr)=>{
	return item > 1000
})
console.log('some', someSal);

//method Every
//возвращает тру или фолс. Тру если все элементы подподают под условие, иначе фолс.

const everySal = salaries.every((item, index, arr)=>{
	return item > 1000
})
console.log('every', everySal);
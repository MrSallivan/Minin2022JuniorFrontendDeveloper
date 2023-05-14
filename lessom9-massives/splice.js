//SPLICE
//удалить одни элементы массива и вставить на их месть другие
// 1 - atart delete
// 2 - end delete
// 3 - what change
//return deletes elements
//change start massive

const cars = ['BMW', 'Mercedes', 'Lada']


const removeEl = cars.splice(1, 1, 'Mazda')
console.log(cars);
console.log(removeEl);


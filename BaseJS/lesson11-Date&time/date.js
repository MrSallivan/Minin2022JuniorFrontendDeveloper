//Date

const date = new Date()
console.log(date);

const newDate = new Date(2023, 2, 31, 10, 10, 5, 5000)
console.log(newDate);

console.log('year', newDate.getFullYear());
console.log('month', newDate.getMonth());
console.log('date', newDate.getDate());
console.log('day', newDate.getDay());
console.log('set year', newDate.setFullYear(2025));
console.log('year', newDate.getFullYear(2025));

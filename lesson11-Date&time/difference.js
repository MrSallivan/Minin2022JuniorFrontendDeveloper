const date1 = new Date(2005, 4, 20)
const date2 = new Date(2006, 4, 10)

console.log('date1', date1.getTime());
console.log('date2', date2.getTime());

const difference = date2.getTime() - date1.getTime()
console.log('difference', difference / 1000 / 60);

const startTime = Date.now()

for (let i = 0; i < 100000000; i++) {


}

const endTime = Date.now()

const difTime = endTime - startTime
console.log(difTime);
//REDUCE
//если не задать фторой параметр, то в аккумулятор  попадет первый элемент массива



const arrRed = [400, 500, 600, 2000, 350,700]

const reduceArr = arrRed.reduce((acc, item, index, array)=>{
return acc + item
}, 0)
console.log('reduce', reduceArr);
//SORT
//изменяет исходный массив
//если не задать параметров то будет сортировка по строкам. числа преобразуются в строки.
//изменяет текущий массив



const arrSort = [400, 500, 600, 2000, 350,700]

const sortArrUp = arrSort.sort((a,b)=>{
return a - b
})
console.log('sortUp', sortArrUp);
console.log(arrSort);

const sortArrDown = arrSort.sort((a,b)=>{
return b - a
})
console.log('sortDown', sortArrDown);
console.log(arrSort);

console.log('sortNotParams', arrSort.sort());

const names = ['Maxim','Igor', 'Natya', 'Vova']
const names2 = ['Maxim','Igor', 'Natya', 'Vova']

console.log('sortString', names.sort());

names2.sort((a,b)=>{
	if(a<b) {
		return 1
	}
	if (a>b){
		return -1
	}
	return 0
})

console.log('sortStr', names2)
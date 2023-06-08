const allElement = document.querySelectorAll('*')

allElement.forEach(elem => {
elem.addEventListener('click', (e)=>{
	//target - элемент на котором сработало событие 
	//curentTarget - элемент на котором срабатывает событие сейчас
	e.currentTarget.style.border = '1px solid blue'
	alert(`Всплытие ${elem.tagName}`)
},true) //если стоит true то отлавливается погружение, по умолчанию false всплытие
})
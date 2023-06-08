// Представьте, что вы разрабатываете интернет магазин по доставке еды.Вам поставили
// задачу подсчета итоговой суммы всех товаров в корзине.
// Вам необходимо создать функцию getTotalPriceOfShoppingBag, которая будет
// принимать в себя 1 параметр shoppingBag.shoppingBag - это массив продуктов в
// корзине, состоящий из объектов, в каждом из которых хранится информация о названии
// продукта(product) и о количестве продукта в корзине(quantity).
// Также у интернет - магазина есть глобальный объект, в котором хранится вся нужная
// информация о каждой единице продукта:
const groceries = {
	"Orange Juice": {
		price: 1.5,
		discount: 10,
	},
	"Chocolate": {
		price: 2,
		discount: 0,
	},
	// more items...
}
// Функция getTotalPriceOfShoppingBag должна возвращать общую стоимость всех товаров
// в корзине с учетом скидок и с учетом указанных клиентом количеством продуктов.
// Итоговое значение должно быть округлено до сотых.Это можно сделать с помощью
// toFixed(https://developer.mozilla.org/...)
// 	Посмотрите на возможно возвращаемое значение функции getTotalPriceOfShoppingBag:

const shoppingBag = [
	{ product: 'Chocolate', quantity: 3 },
	{ product: 'Orange Juice', quantity: 23 },
]

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice); // Возвращает 37.05

// my option 

function getTotalPriceOfShoppingBag(bag) {
	let totalPrice = 0
	shoppingBag.forEach(item => {
		if (groceries?.[item.product] && groceries?.[item.product]?.discount) {
			let sumPriseNotDiscount = item.quantity * groceries[item.product].price
			let withDiscount = sumPriseNotDiscount - ((sumPriseNotDiscount * groceries[item.product].discount) / 100)
			totalPrice += withDiscount
		}
		if (groceries?.[item.product] && (groceries[item.product].discount === 0)) {
			let sumPriseNotDiscount = item.quantity * groceries[item.product].price
			totalPrice += sumPriseNotDiscount
		}
	})
	return +totalPrice.toFixed(2)
}

//option 2

// function getTotalPriceOfShoppingBag(bag) {
// 	const shoppingItems = Object.values(bag)
// 	if (shoppingBag.length === 0) { return 0 }
// 	const totalPrice = shoppingItems.reduce((acc, currentProduct) => {
// 		const { product, quantity } = currentProduct
// 		const productObject = groceries[product];
// 		const { price, discount } = productObject
// 		const priceWithDiscount = productObject.price - (price * discount / 100);
// 		let totalProductPrice = priceWithDiscount * quantity;
// 		return acc + totalProductPrice;

// 	}, 0)
// 	return +totalPrice.toFixed(2);
// }

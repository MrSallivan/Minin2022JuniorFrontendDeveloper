//string | symbol

const id = Symbol('id')

const user = {
	[id]: 5,
	name: 'Maxim',
	10: '1234',
	undefined: undefined,
	[false]: false,
}
console.log('user', user);
console.log(Object.keys(user));
console.log(user[id]);

//In

console.log('name' in user);
console.log(id in user);
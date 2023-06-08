const developerInfo = {
	age: 25,
	experience: 3
}

const developerExtraInfo = {
	height: 180,
	isJunior: false
}
//1
const developer = {
	...developerInfo,
	...developerExtraInfo
}

console.log(developer);

//2

const developer2 = Object.assign(developerInfo, developerExtraInfo)
console.log(developer2)



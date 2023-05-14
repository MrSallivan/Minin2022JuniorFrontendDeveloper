const developer = {
	name: 'Maxim',
	job: "Front-end developer",
	experience: 24,
	jobAllInfo: {
		type: 'Front-end',
		framework: 'ReactJS'
	}
}
console.log('name', developer.name);
console.log('jobAllInfo', developer.jobAllInfo);

const key = 'name'
console.log('name', developer[key]);

const student = {
	id: 1,
	programmingLanguage: 'JavaScript',
	hasExperienceInReact: false,
}
student.experience = 6
console.log(student)

delete student.hasExperienceInReact

console.log(student)
console.log('KEYS', Object.keys(student))
console.log('Values', Object.values(student))
console.log('ENTRIES', Object.entries(student))


//! Опциональная цепочка ?cd

if (developer?.jobAllInfo?.framework?.name) {
	console.log('Разрабртчик уже знает Framework')
} else {
	console.log('Разрабртчик не знает Framework')
}



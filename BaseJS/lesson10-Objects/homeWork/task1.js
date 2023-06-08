// todo Вам необходимо создать новый массив onlineUsers, который будет содержать объекты
// todo только тех пользователей, у которых status равен “online”.
// todo После выведите через alert сообщение “Сейчас в онлайн следующие пользователи:
// todo usersOnlineNames”, где usersOnlineNames - строка, в которой имена пользователей
// todo отображаются через запятую.
// todo Для кода выше результат должен быть следующим: “Сейчас в онлайн следующие
// todo пользователи: David, Bob”

const users = [
{
username: 'David',
status: 'online',
lastActivity: 10
},
{
username: 'Lucy',
status: 'offline',
lastActivity: 22
},
{
username: 'Bob',
status: 'online',
lastActivity: 104
}
]

const userOnline = users.filter((item) =>{
	return item?.status && (item.status === 'online')
})
let userOnlineNames = userOnline.map(item => item.username).join(', ')

console.log(`Сейчас онлайн следующие пользователи: ${userOnlineNames}.`);
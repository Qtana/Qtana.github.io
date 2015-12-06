var names = [];
for (var i=0; i<3; i++) {
	names[i] = prompt ('Введіть ім’я користувача');
}
console.log(names);

var userName = prompt ('Введіть своє ім’я');
var userFound = false;

for (var i=0; i<names.length; i++) {
	if (names[i] === userName) {
		userFound = true;

		break;
	}
}

if(userFound) {
	alert(userName + ' - Ви успішно ввійшли');
} else {
	alert('Користувача не знайдено в системі');
}
for (let i = 0; i < 5; i++) {
	console.log(i);
}

const names = ['Mario', 'Nicola', 'Giovanna', 'Maria', 'Ernesto'];

for (let i = 0; i < names.length; i++) {
	console.log(names[i]);
}

for (let i = names.length - 1; i >= 0; i--) {
	console.log(names[i]);
}

for (let i = 0; i <= 20; i += 2) {
	// i += 2 significa i = i + 2
	console.log(i);
}

for (const name of names) {
	console.log(name);
}

const user = {
	name: 'Mario',
	surname: 'Rossi',
	age: 25,
	active: true,
	address: {
		street: 'via Roma',
		number: 20,
		city: 'Milano',
	},
};

for (const key in user) {
	if (key === 'address') {
		for (const key in user.address) {
			console.log(`${key} = ${user.address[key]}`);
		}
	} else {
		console.log(`${key} = ${user[key]}`);
	}
}

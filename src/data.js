const faker = require('faker');

const getData = (number) => {
	const data = [];
	for (let i = 0; i < number; i++) {
		data.push({
			name: faker.name.findName(),
			hours: faker.random.number(12),
			price_hour: faker.commerce.price(15, 30, 2),
		});
	}
	return data;
};

module.exports = getData;

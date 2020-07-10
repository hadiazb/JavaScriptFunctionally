const EveryCondition = (arr, number) => {
	return arr.hours > number;
};
const Every = (arr) => arr.every(EveryCondition);

module.exports = Every;

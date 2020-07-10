const Filter = (arr, min, max) => {
	const newArr = arr.filter((arr) =>  (arr.hours >= min) && (arr.hours <= max));
	return newArr;
};

const Count = (arr, min, max) => {
  let count = 0;
	const newArr = arr.filter((arr) =>  {((arr.hours >= min) && (arr.hours <= max)) ? count++ : count});
	return count;
};
module.exports = {
  Filter,
  Count
};

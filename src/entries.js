const Iterator = (arr) => {
	let newArr = arr.entries();
	let count = 0;
	for (const x of newArr) {
		count++;
  }
  return count;
};
module.exports = Iterator;

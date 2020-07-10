const FindIndex = (arr, number) => {
  let index = arr.findIndex((arr) =>  arr.hours >= number);
  return index;
}

module.exports = FindIndex;